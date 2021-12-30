import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
import sys
import pprint

client_id = 'b890657b5f374579a0eb78a6831ca38d'
client_secret = 'cf38fd4f4f20463aa41e901c37130b53'
client_credentials_manager = spotipy.oauth2.SpotifyClientCredentials(client_id, client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

def getTrackInf(query):
    try:
        tracks = sp.search(q='track:'+query, limit=10, offset=0, type='track', market=None)["tracks"]["items"]
        for track in tracks :
            # フロント側に返す処理
            print('track_id    : ' + track['id'])
            print('track    : ' + track['name'])
            print('audio    : ' + track['preview_url'])
            print('cover art: ' + track['album']['images'][0]['url'])
        return track

    except IndexError:
        print("IndexError has occurred!")
    except AttributeError:
        print("AttributeError has occurred!")


# nameをフロント側から受け取る
track_name = "Radiohead"
getTrackInf(track_name)

