from fastapi import FastAPI
from starlette.graphql import GraphQLApp

from models import db_session
from schema import schema

# FastAPIのインスタンスを作成
app = FastAPI()

# GraphQLを提供するためのエンドポイントを定義
app.add_route("/graphql", GraphQLApp(schema=schema))

# APIサーバシャットダウン時にDBセッションを削除
@app.on_event("shutdown")
def shutdown_event():
    db_session.remove()