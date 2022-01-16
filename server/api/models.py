# flask_sqlalchemy/models.py
from sqlalchemy import *
from sqlalchemy.orm import (scoped_session, sessionmaker, relationship,
                            backref)
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.sql.base import ColumnSet

engine = create_engine('sqlite:///database.sqlite3', convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))

Base = declarative_base()
Base.query = db_session.query_property()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    twitter_id = Column(String)
    user_name = Column(String)
    profile_image_url = Column(String)
    preference = Column(Integer)
    

class Track(Base):
    __tablename__ = "tracks"
    
    track_id = Column(Integer, primary_key=True)
    track_name = Column(String)
    spotify_url = Column(Integer)
    cover_art = Column(Integer)
    # Userにrelationを張る,1ユーザーに対して1Track
    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    user=relationship(
        User,
        backref=backref('tracks', uselist=True, cascade='delete,all'))

class FeatureTrack(Base):
    __tablename__ = "feature_tracks"
    
    energy = Column(Integer)
    danceability =Column(Integer)
    mode =Column(Integer)
    acousticness =Column(Integer)
    # Trackにrelationを張る,1Trackに対して1特徴量データ
    track_id = Column(Integer, ForeignKey('tracks.track_id'), primary_key=True)
    user_id = Column(Integer, primary_key=True)
    tracks=relationship(
        Track,
        backref=backref('feature_tracks', uselist=True, cascade='delete,all'))

Base.metadata.create_all(bind=engine)