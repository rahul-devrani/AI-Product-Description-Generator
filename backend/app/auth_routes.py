from fastapi import APIRouter, HTTPException, status

from app.auth_models import (
    RegisterRequest,
    LoginRequest
)

from app.database import users_collection

from app.auth_utils import (
    hash_password,
    verify_password,
    create_access_token
)

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post(
    "/register",
    status_code=status.HTTP_201_CREATED
)
def register_user(user: RegisterRequest):

    existing_user = users_collection.find_one(
        {
            "email": user.email
        }
    )

    if existing_user:

        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered."
        )

    hashed_password = hash_password(
        user.password
    )

    new_user = {

        "name": user.name,

        "email": user.email,

        "password": hashed_password

    }

    users_collection.insert_one(
        new_user
    )

    return {

        "message": "User registered successfully."

    }

@router.post(
    "/login",
    status_code=status.HTTP_200_OK
)
def login_user(user: LoginRequest):

    existing_user = users_collection.find_one(
        {
            "email": user.email
        }
    )

    if not existing_user:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    valid_password = verify_password(
        user.password,
        existing_user["password"]
    )

    if not valid_password:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password."
        )

    token = create_access_token(
        existing_user["email"]
    )

    return {

        "message": "Login successful.",

        "access_token": token,

        "token_type": "bearer",

        "user": {

            "name": existing_user["name"],

            "email": existing_user["email"]

        }

    }