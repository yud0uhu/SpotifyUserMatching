import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


from dotenv import load_dotenv
import os

from sqlalchemy.sql.elements import True_

load_dotenv()

from models import engine, db_session, Base, User, Track, FeatureTrack
from sqlalchemy.sql.expression import null

Base.metadata.create_all(bind=engine)

client_id = 'b890657b5f374579a0eb78a6831ca38d'
client_secret = 'cf38fd4f4f20463aa41e901c37130b53'

client_credentials_manager = spotipy.oauth2.SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# フロント側のユーザーの検索に対して楽曲情報を渡す
def getTrackInf(query):
    try:
        # フロント側に返す処理
        tracks = sp.search(q='track:'+query, limit=10, offset=0, type='track', market=None)["tracks"]["items"]
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
def postTrackFeature(user_id,track_id):
    try:
        features = sp.audio_features(track_id)
        print(features[0])
        insert_feature_track(user_id,features[0])

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

def insert_feature_track(id,feature):
    track_id=feature['id']

    Base.metadata.create_all(bind=engine)
    track = Track()
    feature_track = FeatureTrack()

    try:
        track = Track(user_id=id, track_id=track_id)
        db_session.add(track)

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
        return track

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

# フロント側からユーザーIDが返却されるため、そのユーザーの類似した好みを持つユーザーをすべて参照する
# 類似したユーザーをフロントに返す
def select_match_user(user_id):
    users = db_session.query(User).\
                filter(User.id==user_id).\
                all()
    for user in users:
        # print(user.preference)
        preference = user.preference

    all_users = db_session.query(User).\
                filter(User.id!=user_id).\
                all()
    for all_user in all_users:
        print(all_user.preference)
    
        # 100%マッチ
        if preference == all_user.preference:
            print(all_user.id)
            return all_user.id
        # ?%マッチ
        elif (preference-1) < all_user.preference < preference*0.2:
            print(all_user.id)
            return all_user.id
    
    
# ユーザー固有の楽曲情報から好みを登録する
def insert_user_preference(user_id):
    energy = 0
    # ユーザーIDをキーに楽曲情報と特徴量をすべて取得する
    all_feature_tracks = db_session.query(FeatureTrack.energy).\
        filter(FeatureTrack.user_id==user_id).\
        all()
    for featuretrack in all_feature_tracks:
        energy+=featuretrack.energy
    print(energy/len(all_feature_tracks))
    # 特徴量のうち、エネルギーの平均を出す
    energy_avarage=energy/len(all_feature_tracks)

    # ユーザーテーブルに好みを登録する
    user_preference = db_session.query(User).\
        filter(User.id==user_id).\
        first()
    user_preference.preference = energy_avarage
    db_session.commit()

if __name__ == '__main__':
    # nameをフロント側から受け取る
    track_name = "Radiohead"
#    insert_user_preference(10)
    select_match_user(10)
    # getTrackInf(track_name)
    # addTrackInf(track_name)