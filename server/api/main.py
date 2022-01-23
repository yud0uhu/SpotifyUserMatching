import graphene
from fastapi import Depends, FastAPI, Response, status, APIRouter
from fastapi.security import HTTPBearer

from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

from starlette_graphene3 import GraphQLApp

from models import db_session
from schema import Query,MyMutations

from starlette.middleware.cors import CORSMiddleware 

import spotify_connect
import user_session as user_session

router = APIRouter()

from utils import VerifyToken

token_auth_scheme = HTTPBearer()

import re

# FastAPIのインスタンスを作成
# app = FastAPI()
app = FastAPI(title='ContactQL', description='GraphQL Contact APIs', version='0.1')
app.debug = True

# CORSを回避するために追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# GraphQLを提供するためのエンドポイントを定義

@app.get("/")
async def root():
    return {"message": "Contact Applications!"}

app.add_route("/graphql", GraphQLApp(schema=graphene.Schema(query=Query,mutation=MyMutations)))

# 楽曲情報を検索
@app.get("/search/{track_term}")
async def serch_track(track_term):
    response = spotify_connect.getTrackInf(track_term)
    return response

# 楽曲情報を登録    
@app.post("/{user_id}/ranking/{track_id}/{track_name}")
async def post_track(user_id,track_id,track_name):
    spotify_connect.postTrackFeature(user_id,track_id,track_name)
    # 楽曲特徴量を登録
    spotify_connect.insert_user_preference(user_id)
    return "OK!"

# 楽曲情報を取得
@app.get("/{user_id}/ranking")
async def select_track(user_id):
    response = spotify_connect.select_feature_track(user_id)
    return response

# ユーザー情報を取得
@app.get("/user/{user_id}")
async def serch_user(user_id):
    response = spotify_connect.select_match_user(user_id)
    return response


@app.get("/api/public")
def public():
    """No access token required to access this route"""
 
    result = {
        "status": "success",
        "msg": ("Hello from a public endpoint! You don't need to be "
                "authenticated to see this.")
    }
    return result
 

@app.get("/api/private")
def private(response: Response, token: str = Depends(token_auth_scheme)):
    """A valid access token is required to access this route"""

    result = VerifyToken(token.credentials).verify()

    if result.get("status"):
        response.status_code = status.HTTP_400_BAD_REQUEST
        return result

    return result


@app.get("/api/private-scoped")
def private_scoped(response: Response, token: str = Depends(token_auth_scheme)):
    """A valid access token and an appropriate scope are required to access
    this route
    """

    result = VerifyToken(token.credentials, scopes="read:messages").verify()
    print(result)

    if result.get("status"):
        response.status_code = status.HTTP_400_BAD_REQUEST
        return result

    userId,userName,twitterId,profile_image_url = user_session.init_user_login(result)

    user_info = {"userId":userId,"userName":userName,"twitterId":twitterId,"profileImageUrl":profile_image_url}

    return user_info


# APIサーバシャットダウン時にDBセッションを削除
@app.on_event("shutdown")
def shutdown_event():
    db_session.remove()