import os
import firebase_admin

from firebase_admin import credentials
from firebase_admin import auth


if os.path.exists("/etc/secrets/firebase-key.json"):
    firebase_path = "/etc/secrets/firebase-key.json"
else:
    firebase_path = "app/firebase/firebase-key.json"


cred = credentials.Certificate(firebase_path)

if not firebase_admin._apps:
    firebase_admin.initialize_app(cred)