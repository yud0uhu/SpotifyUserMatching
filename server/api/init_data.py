from models import engine, db_session, Base, User, Track
from sqlalchemy.sql.expression import null
Base.metadata.create_all(bind=engine)

cat = User(id='123', user_name='cat')
db_session.add(cat)
dog = User(id='456', user_name='dog')
db_session.add(dog)
db_session.commit()