from models import engine, db_session, Base, User, Track, FeatureTrack
from sqlalchemy.sql.expression import null
Base.metadata.create_all(bind=engine)

import spotify_connect

def init_session(Id, twitterId, userName):

    user = User()

    user = User(id=Id,twitter_id=twitterId, user_name=userName)

    db_session.add(user)
    db_session.commit()

def insert_track(user_id, track_id, track_name, audio, cover_art):
    
    track = Track()

    track = Track(user_id=user_id, track_id=track_id, track_name=track_name, audio=audio, cover_art=cover_art)

    db_session.add(track)
    db_session.commit()


def insert_feature_track(energy, danceability, mode, acousticness, trackId, userId):
    
    feature_track = Track()

    feature_track = FeatureTrack(energy=energy, danceability=danceability, mode=mode, acousticness=acousticness, track_id= trackId, user_id=userId)

    db_session.add(feature_track)
    db_session.commit()    


userNameList = []
userNameList = ["cat","dog","kuromame","datemaki","kurikinton","iwashi","kazunoko","konbumaki","dendukuri","ebi"]

Id = 1
twitterId = 1
for userName in userNameList:
    init_session(Id, twitterId, userName)

    trackNameList = []
    trackNameList = ["All I Want for Christmas Is You","残響散歌","Answer","ハート","abcdefu","Afterglow","踊","Savage","Anniversary","勿忘"]
    for trackNames in trackNameList:
        print(trackNames)

        track = spotify_connect.addTrackInf(trackNames)
        # DBに登録する処理
        trackId=track['id']
        trackName=track['name']
        Audio=track['preview_url']
        CoverArt=track['album']['images'][0]['url']
        # print(track)

        insert_track(user_id=Id, track_id=trackId, track_name=trackName, audio=Audio, cover_art=CoverArt)

        feature = spotify_connect.getAudioFeature(trackId)
        # DBに登録する処理
        energy = feature['energy']
        danceability = feature['danceability']
        mode = feature['mode']
        acousticness = feature['acousticness']

        insert_feature_track(energy,danceability,mode,acousticness,trackId,Id)
    
    Id +=1
    twitterId += 1