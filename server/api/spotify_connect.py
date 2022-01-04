import spotipy
from spotipy.oauth2 import SpotifyClientCredentials


from dotenv import load_dotenv
import os

load_dotenv()

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
        # for track in tracks :
            # print('track_id    : ' + track['id'])
            # print('track    : ' + track['name'])
            # print('audio    : ' + track['preview_url'])
            # print('cover art: ' + track['album']['images'][0]['url'])
            # return track

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

# バックエンド側でDBに登録した楽曲の特徴量を検索し、DBに登録する
def getAudioFeature(track_id):
    try:
        features = sp.audio_features(track_id)
        return features[0]

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")



if __name__ == '__main__':
    # nameをフロント側から受け取る
    track_name = "Radiohead"
    getTrackInf(track_name)
    addTrackInf(track_name)