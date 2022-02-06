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
