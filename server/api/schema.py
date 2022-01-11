from sqlalchemy.sql.functions import mode, user
import graphene
from graphene_sqlalchemy import SQLAlchemyObjectType
from graphene_sqlalchemy import SQLAlchemyConnectionField
from models import db_session
from models import User as UserModel, Track as TrackModel, FeatureTrack as FeatureTrackModel
class UserType(SQLAlchemyObjectType):
    class Meta:
        model = UserModel

class TrackType(SQLAlchemyObjectType):
    class Meta:
        model = TrackModel        

class FeatureTrackType(SQLAlchemyObjectType):
    class Meta:
        model = FeatureTrackModel

# ... the Mutation Class
## ユーザー情報更新
class CreateUser(graphene.Mutation):
    class Arguments:
        id =  graphene.Int()
        twitter_id = graphene.String()
        user_name = graphene.String()

    ok = graphene.Boolean()
    user = graphene.Field(lambda: User)

    def mutate(root, info, user_name,twitter_id,id):
        user = User(user_name=user_name,twitter_id=twitter_id,id=id)
        ok = True
        return CreateUser(user=user, ok=ok)

class User(graphene.ObjectType):
    id =  graphene.Int()
    twitter_id = graphene.String()
    user_name = graphene.String()


## 楽曲情報更新
class CreateTrack(graphene.Mutation):
    class Arguments:
        track_id =  graphene.Int()
        user_id = graphene.Int()

    ok = graphene.Boolean()
    track = graphene.Field(lambda: Track)

    def mutate(root, info, track_id,user_id):
        track = Track(track_id=track_id,user_id=user_id)
        ok = True
        return CreateTrack(track=track, ok=ok)

class Track(graphene.ObjectType):
    track_id =  graphene.Int()
    user_id = graphene.Int()

## 楽曲特徴量情報更新
class CreateFeatureTrack(graphene.Mutation):
    class Arguments:
        energy =graphene.Int()
        danceability =graphene.Int()
        mode =graphene.Int()
        acousticness =graphene.Int()
        track_id =graphene.Int()
        user_id =graphene.Int()

    ok = graphene.Boolean()
    trackfeature = graphene.Field(lambda: Track)

    def mutate(root, info, energy, danceability, mode, acousticness, track_id, user_id):
        trackfeature = Track(energy=energy,danceability=danceability,mode=mode,acousticness=acousticness,track_id=track_id,user_id=user_id)
        ok = True
        return CreateFeatureTrack(trackfeature=trackfeature, ok=ok)

class FeatrueTrack(graphene.ObjectType):
    energy =graphene.Int()
    danceability =graphene.Int()
    mode =graphene.Int()
    acousticness =graphene.Int()
    track_id =graphene.Int()
    user_id =graphene.Int()

class MyMutations(graphene.ObjectType):
    create_user = CreateUser.Field()
    create_track= CreateTrack.Field()
    create_track_feature = CreateFeatureTrack.Field()


class Query(graphene.ObjectType):
    all_users = graphene.List(User)
    all_tracks = graphene.List(Track)
    all_feature_tracks = graphene.List(FeatrueTrack)
    user = graphene.Field(User)

    def resolve_users(self, info):
        query = UserType.get_query(info)  # SQLAlchemy query
        return query.all()

    def resolve_users(self, info):
        query = TrackType.get_query(info)  # SQLAlchemy query
        return query.all()

    def resolve_users(self, info):
        query = FeatureTrackType.get_query(info)  # SQLAlchemy query
        return query.all()

schema = graphene.Schema(query=Query,mutation=MyMutations)