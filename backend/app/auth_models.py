from pydantic import BaseModel, EmailStr, Field, field_validator

import re


class RegisterRequest(BaseModel):

    name: str = Field(
        min_length=3,
        max_length=50
    )

    email: EmailStr

    password: str = Field(
        min_length=8
    )

    @field_validator("password")
    @classmethod
    def validate_password(cls, value):

        if not re.search(r"[A-Z]", value):
            raise ValueError(
                "Password must contain at least one uppercase letter."
            )

        if not re.search(r"[a-z]", value):
            raise ValueError(
                "Password must contain at least one lowercase letter."
            )

        if not re.search(r"\d", value):
            raise ValueError(
                "Password must contain at least one number."
            )

        return value


class LoginRequest(BaseModel):

    email: EmailStr

    password: str

class GoogleLoginRequest(BaseModel):
    token: str