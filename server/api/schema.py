import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from models import User as UserModel, Track as TrackModel


class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )


class UserConnections(relay.Connection):
    class Meta:
        node = User


class Track(SQLAlchemyObjectType):
    class Meta:
        model = TrackModel
        interfaces = (relay.Node, )


class TrackConnections(relay.Connection):
    class Meta:
        node = Track


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_employees = SQLAlchemyConnectionField(UserConnections)
    # ソートを無効化
    all_departments = SQLAlchemyConnectionField(TrackConnections, sort=None)


schema = graphene.Schema(query=Query)