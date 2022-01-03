import graphene
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


class UserInput(graphene.InputObjectType):
    id = graphene.String(required=True)
    twitter_id = graphene.String(required=True)
    user_name = graphene.String()

class UserOutput(graphene.ObjectType):
    id = graphene.String(required=True)
    twitter_id = graphene.String(required=True)
    user_name = graphene.String()

class CreateUser(graphene.Mutation):
    class Arguments:
        user_data = UserInput(required=True)

    user = graphene.Field(UserOutput)

    def mutate(root, info, user_data=None):
        user = UserOutput(
            id=user_data.id,
            twitter_id=user_data.twitter_id,
            user_name=user_data.user_name
        )
        return CreateUser(user=user)

class Query(graphene.ObjectType):
    all_users = graphene.List(User)
    all_tracks = graphene.List(Track)
    all_feature_tracks = graphene.List(FeatureTrack)
    user = graphene.Field(UserOutput)

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
    create_user = CreateUser.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)