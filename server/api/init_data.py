from models import engine, db_session, Base, User, Track
from sqlalchemy.sql.expression import null
Base.metadata.create_all(bind=engine)


def session(Id, twitterId, userName):

    user = User()

    user = User(id=Id,twitter_id=twitterId, user_name=userName)

    db_session.add(user)
    db_session.commit()

    # dog = User(id=456,twitter_id=654, user_name='dog')
    # db_session.add(dog)

# cat_track = Track(user_id=456,track_id=321,track_name="aaa",audio="bbb",cover_art="ccc")
# db_session.add(cat_track)

# db_session.commit()

Id = 111
twitterId = 222
userName = "cat"
session(Id, twitterId, userName)