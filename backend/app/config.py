import os

from dotenv import load_dotenv

load_dotenv()


MONGO_URI = os.getenv("MONGO_URI")
DATABASE_NAME = "prodescription"
COLLECTION_NAME = "products"
JWT_SECRET = os.getenv("JWT_SECRET")

JWT_ALGORITHM = os.getenv("JWT_ALGORITHM")

TOKEN_EXPIRE_DAYS = int(
    os.getenv("TOKEN_EXPIRE_DAYS", 7)
)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")