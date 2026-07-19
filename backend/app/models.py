from pydantic import BaseModel, Field, field_validator

from typing import List


class ProductRequest(BaseModel):

    product_name: str = Field(
        min_length=3,
        max_length=100
    )

    ingredients: str = Field(
        min_length=2
    )

    weight: str = Field(
        min_length=1
    )

   

    key_features: str = Field(
        min_length=2
    )

    tone: str

    @field_validator("tone")
    @classmethod
    def validate_tone(cls, value):

        allowed = [

            "Premium",

            "Traditional",

            "Healthy"

        ]

        if value not in allowed:

            raise ValueError(
                f"Tone must be one of: {', '.join(allowed)}"
            )

        return value


class Product(ProductRequest):

    id: int

    title: str

    description: str

    tagline: str

    seo_keywords: List[str]

    social_caption: str