import firebase_admin

from firebase_admin import credentials

from firebase_admin import auth


cred = credentials.Certificate(
    "app/firebase/firebase-key.json"
)

firebase_admin.initialize_app(cred)