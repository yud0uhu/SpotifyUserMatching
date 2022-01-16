import os
import re
import tweepy
from models import engine, db_session, User
from sqlalchemy.sql.expression import null
from dotenv import load_dotenv

load_dotenv()

TWITTER_API_KEY = os.environ.get("TWITTER_API_KEY")
TWITTER_API_SECRET_KEY= os.environ.get("TWITTER_API_SECRET_KEY")
TWITTER_ACCSESS_TOKEN = os.environ.get("TWITTER_ACCSESS_TOKEN")
TWITTER_ACCSESS_TOKEN_SECRET = os.environ.get("TWITTER_ACCSESS_TOKEN_SECRET")

auth = tweepy.OAuthHandler(TWITTER_API_KEY, TWITTER_API_SECRET_KEY)

auth.set_access_token(TWITTER_ACCSESS_TOKEN, TWITTER_ACCSESS_TOKEN_SECRET)

api = tweepy.API(auth)

def init_user_login(result):

    Id = result['iat']
    userId = int(re.sub(r'\D', '', result['sub']))
    userInfo = api.get_user(user_id=userId)
    print(userInfo.screen_name)
    twitter_id = userInfo.screen_name
    userName = userInfo.name
    
    user = User()

    user = User(id=userId,twitter_id=twitter_id, user_name=userName,preference=0)

    db_session.add(user)

    user = db_session.query(User).\
        filter(User.id==Id).\
        session.rollback()

    db_session.commit()
    return userId,userName,twitter_id