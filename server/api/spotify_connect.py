import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


from dotenv import load_dotenv
import os

from sqlalchemy.sql.elements import True_

load_dotenv()

import schema

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
            filter(User.user_id==user_id).\
            all()
        return track

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")

if __name__ == '__main__':
    # nameをフロント側から受け取る
    track_name = "Radiohead"
    # getTrackInf(track_name)
    # addTrackInf(track_name)