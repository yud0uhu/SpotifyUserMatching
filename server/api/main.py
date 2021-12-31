from fastapi import FastAPI
from starlette.graphql import GraphQLApp

from models import db_session
from schema import schema

from starlette.middleware.cors import CORSMiddleware 

# FastAPIのインスタンスを作成
app = FastAPI()
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
app.add_route("/graphql", GraphQLApp(schema=schema))

# APIサーバシャットダウン時にDBセッションを削除
@app.on_event("shutdown")
def shutdown_event():
    db_session.remove()