from models import engine, db_session, Base, User
from sqlalchemy.sql.expression import null
Base.metadata.create_all(bind=engine)


cat = User(id=123,twitter_id=321, user_name='cat')
db_session.add(cat)
dog = User(id=456,twitter_id=654, user_name='dog')
db_session.add(dog)
db_session.commit()