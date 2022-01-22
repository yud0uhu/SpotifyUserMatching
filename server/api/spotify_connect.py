from lib2to3.pytree import convert
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


from dotenv import load_dotenv
import os

from sqlalchemy.sql.elements import True_

load_dotenv()

from models import engine, db_session, Base, User, Track, FeatureTrack
from sqlalchemy.sql.expression import null

Base.metadata.create_all(bind=engine)

client_id = os.environ.get("SPOTIPY_CLIENT_ID")
client_secret = os.environ.get("SPOTIPY_CLIENT_SECRET")

client_credentials_manager = spotipy.oauth2.SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# フロント側のユーザーの検索に対して楽曲情報を渡す
def getTrackInf(query):
    try:
        # フロント側に返す処理
        tracks = sp.search(q='track:'+query, limit=10, offset=0, type='track', market='JP')["tracks"]["items"]
        return tracks

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

# フロント側でユーザーが登録した楽曲が返却されるため、その楽曲情報を検索し、DBに登録する
def addTrackInf(query):
    try:
        tracks = sp.search(q='track:'+query, limit=1, offset=0, type='track', market=None)["tracks"]["items"]
        
        return tracks[0]

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")
        

# フロント側でユーザーが登録した楽曲のIDが返却されるため、その楽曲の特徴量を検索し、DBに登録する
def postTrackFeature(user_id,track_id,track_name):
    try:
        features = sp.audio_features(track_id)
        
        # TODO: 後で関数切り出し
        # 楽曲名から楽曲情報を取得し楽曲テーブルに登録
        track_info = sp.search(q='track:'+track_name, limit=1, offset=0, type='track', market=None)["tracks"]["items"]

        spotifyUrl = track_info[0]["album"]["external_urls"]["spotify"]

        coverArt = track_info[0]["album"]["images"][0]["url"]
        
        insert_feature_track(user_id,features[0],track_name,cover_art=coverArt,spotify_url=spotifyUrl)

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

def insert_feature_track(id,feature,track_name,cover_art,spotify_url):
    track_id=feature['id']

    feature_track = FeatureTrack()

    try:
        
        # 初回のみ普通にINSERT
        track = Track(user_id=id, track_id=track_id, track_name=track_name,cover_art=cover_art,spotify_url=spotify_url)
        db_session.add(track)

        # 楽曲IDがユニークではない時INSERTせずUPDATEする
        # Track.update().\
        #     where(Track.track_id==track_id).\
        #     values(track_id=track_id, track_name=track_name,cover_art=cover_art,spotify_url=spotify_url)
        
        feature_track = FeatureTrack(energy=feature['energy'], danceability=feature['danceability'], mode=feature['mode'], acousticness=feature['acousticness'], track_id=feature['id'], user_id=id)
        db_session.add(feature_track)

        db_session.commit()
        
            
    except:
        db_session.rollback()
        raise
    finally:
        db_session.close()

# バックエンド側でDBに登録した楽曲の特徴量を検索し、DBに登録する
def getAudioFeature(track_id):
    try:
        features = sp.audio_features(track_id)
        return features[0]

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")


# フロント側でユーザーが登録した楽曲のIDが返却されるため、その楽曲情報をDBから参照する
def select_feature_track(user_id):
    try:
        track = db_session.query(Track).\
            filter(Track.user_id==user_id).\
            all()
        print(track)
        # track = db_session.query(Track).all()

        return track

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

# フロント側からユーザーIDが返却されるため、そのユーザーの類似した好みを持つユーザーをすべて参照する
# 類似したユーザーをフロントに返す
def select_match_user(user_id):
    preference = 0
    match_100_user_list = []
    match_20_user_list = []
    
    all_users = db_session.query(User).all()

    match_100_user_list.append(all_users)

    # デバック用.ここで値がとれなければuser_sessionで初期データを格納できていないということ
    for account in all_users:
        print("デバッグ")
        print(account.id)

    for account in all_users:
        if (account.id == user_id) :
            # idをキーに取得したpreferenceを後の比較用に格納
            preference = account.preference

    all_users = db_session.query(User).all()

    for all_user in all_users:
    
        # 100%マッチ
        if preference == all_user.preference:
            # print(all_user.id)
            users = db_session.query(User).\
                filter(User.id==all_user.id).\
                all()
            for user in users:
                match_100_user_list.append(user)
        # ?%マッチ
        elif (preference-1) < all_user.preference < preference*0.2:
            # print(all_user.id)
            users = db_session.query(user).\
                filter(user.id==all_user.id).\
                all()
            for user in users:
                match_20_user_list.append(user)
        else:
            pass
    return match_100_user_list, match_20_user_list

    
# ユーザー固有の楽曲情報から好みを登録する
def insert_user_preference(user_id):
    energy = 0
    # ユーザーIDをキーに楽曲情報と特徴量をすべて取得する
    all_feature_tracks = db_session.query(FeatureTrack).\
        filter(FeatureTrack.user_id==user_id).\
        all()
    # all_feature_tracks = db_session.query(FeatureTrack).all()
    for featuretrack in all_feature_tracks:
        energy+=featuretrack.energy
    # print(energy/len(all_feature_tracks))
    # 特徴量のうち、エネルギーの平均を出す
    # energy_avarage=energy/len(all_feature_tracks)
    energy_avarage=energy/10

    # ユーザーテーブルに好みを登録する
    user = db_session.query(User).filter(User.id==user_id).first()
    user.preference=energy_avarage
    # db_session.query(User).get(user_id).preference = energy_avarage

    db_session.commit()

# def hogehoge() :
#     users = db_session.query(FeatureTrack.track_id).all()
#     for user in users:
#         return user

if __name__ == '__main__':
    # nameをフロント側から受け取る
    track_name = "Radiohead"
#    insert_user_preference(10)
    # select_match_user(10)
    # getTrackInf(track_name)
    # addTrackInf(track_name)