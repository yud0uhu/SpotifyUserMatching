
from models import engine, db_session, User
from sqlalchemy.sql.expression import null

def init_user_login(result):

    Id = result['iat']
    twitterId = result['sub']
    userName = "testuser"
    
    user = User()

    user = User(id=Id,twitter_id=twitterId, user_name=userName,preference=0)

    db_session.add(user)

    user = db_session.query(User).\
        filter(User.id==Id).\
        session.rollback()

    db_session.commit()