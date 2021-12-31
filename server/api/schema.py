import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from models import User as UserModel, Track as TrackModel, FeatureTrack as FeatureTrackModel

class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        # use `only_fields` to only expose specific fields ie "name"
        # only_fields = ("name",)
        # use `exclude_fields` to exclude specific fields ie "last_name"
        # exclude_fields = ("last_name",)


        
class Track(SQLAlchemyObjectType):
    class Meta:
        model = TrackModel


class FeatureTrack(SQLAlchemyObjectType):
    class Meta:
        model = FeatureTrackModel        

# class Query(graphene.ObjectType):
#     node = relay.Node.Field()
#     # Allows sorting over multiple columns, by default over the primary key
#     all_users = SQLAlchemyConnectionField(UserConnections)
#     # Disable sorting over this field
#     all_tracks = SQLAlchemyConnectionField(TrackConnections, sort=None)

class Query(graphene.ObjectType):
    all_users = graphene.List(User)
    all_tracks = graphene.List(Track)
    all_feature_tracks = graphene.List(FeatureTrack)

    def resolve_all_users(self, info):
        query = User.get_query(info)  # SQLAlchemy query
        return query.all()

    def resolve_all_traks(self, info):
        query = Track.get_query(info)  # SQLAlchemy query
        return query.all()
        
    def resolve_all_feature_traks(self, info):
        query = FeatureTrack.get_query(info)  # SQLAlchemy query
        return query.all()


schema = graphene.Schema(query=Query)