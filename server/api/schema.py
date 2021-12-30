import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType, SQLAlchemyConnectionField
from models import User as UserModel, Track as TrackModel


class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )

class Track(SQLAlchemyObjectType):
    class Meta:
        model = TrackModel
        interfaces = (relay.Node, )

class Query(graphene.ObjectType):
    node = relay.Node.Field()
    # Allows sorting over multiple columns, by default over the primary key
    all_useers = SQLAlchemyConnectionField(User.connection)
    # Disable sorting over this field
    all_tracks = SQLAlchemyConnectionField(Track.connection, sort=None)


schema = graphene.Schema(query=Query)