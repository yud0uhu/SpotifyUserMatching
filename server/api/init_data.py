from models import engine, db_session, Base, User, Track
Base.metadata.create_all(bind=engine)

cat = User(user_id='123')
db_session.add(cat)
dog = User(user_id='456')
db_session.add(dog)
db_session.commit()