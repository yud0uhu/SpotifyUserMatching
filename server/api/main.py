import graphene
from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from starlette.graphql import GraphQLApp

from models import db_session

from schema import Query,MyMutations

from starlette.middleware.cors import CORSMiddleware 

import spotify_connect

from fastapi import APIRouter
router = APIRouter()

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


@app.get("/search/{track_term}")
async def serch_track(track_term):
    response = spotify_connect.getTrackInf(track_term)
    return response

    
@app.get("/{user_id}/ranking/{track_id}")
async def serch_track(user_id,track_id):
    spotify_connect.getTrackFeature(user_id,track_id)


# APIサーバシャットダウン時にDBセッションを削除
@app.on_event("shutdown")
def shutdown_event():
    db_session.remove()