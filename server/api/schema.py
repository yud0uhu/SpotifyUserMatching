import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from models import User as UserModel

class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        # use `only_fields` to only expose specific fields ie "name"
        # only_fields = ("name",)
        # use `exclude_fields` to exclude specific fields ie "last_name"
        # exclude_fields = ("last_name",)

# class User(SQLAlchemyObjectType):
#     class Meta:
#         model = UserModel
#         # interfaces = (relay.Node, )

# class UserConnections(relay.Connection):
#     class Meta:
#         node = User

        
# class Track(SQLAlchemyObjectType):
#     class Meta:
#         model = TrackModel
#         interfaces = (relay.Node, )

# class TrackConnections(relay.Connection):
#     class Meta:
#         node = Track

# class Query(graphene.ObjectType):
#     node = relay.Node.Field()
#     # Allows sorting over multiple columns, by default over the primary key
#     all_users = SQLAlchemyConnectionField(UserConnections)
#     # Disable sorting over this field
#     all_tracks = SQLAlchemyConnectionField(TrackConnections, sort=None)

class Query(graphene.ObjectType):
    users = graphene.List(User)

    def resolve_users(self, info):
        query = User.get_query(info)  # SQLAlchemy query
        return query.all()

schema = graphene.Schema(query=Query)