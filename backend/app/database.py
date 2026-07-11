from pymongo import MongoClient

from app.config import (
    MONGO_URI,
    DATABASE_NAME,
    COLLECTION_NAME
)


client = MongoClient(MONGO_URI)

db = client[DATABASE_NAME]

products_collection = db[COLLECTION_NAME]
users_collection = db["users"]