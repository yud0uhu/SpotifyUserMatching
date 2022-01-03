import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from models import User as UserModel, Track as TrackModel, FeatureTrack as FeatureTrackModel

class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel

class Track(SQLAlchemyObjectType):
    class Meta:
        model = TrackModel

class FeatureTrack(SQLAlchemyObjectType):
    class Meta:
        model = FeatureTrackModel


class UserUpdate(relay.ClientIDMutation) :
    class Input:
        id = graphene.String(required=True)
        twitter_id = graphene.String(required=True)
        user_name = graphene.String(required=True)

    @classmethod
    def mutate_and_get_payload(cls, root, info, id, twiiter_name, user_name):
        user = User(id, twiiter_name, user_name)
        return UserUpdate(user)

class TrackUpdate(relay.ClientIDMutation) :
    class Input:
        track_id = graphene.String(required=True)
        track_name = graphene.String(required=True)
        audio = graphene.String(required=True)
        cover_art = graphene.String(required=True)
        user_id = graphene.String(required=True)
    @classmethod
    def mutate_and_get_payload(cls, root, info, track_id, track_name, audio, cover_art, user_id):
        track = User(track_id, track_name, audio, cover_art, user_id)
        return TrackUpdate(track)        

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

class Mutation(graphene.ObjectType):
    user_update = UserUpdate.Field()
    track_update = TrackUpdate.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)