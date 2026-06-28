from pydantic import BaseModel
from typing import List


class Product(BaseModel):
    id: int
    product_name: str
    ingredients: str
    weight: str
    key_features: str
    tone: str
    description: str
    title: str
    tagline: str
    seo_keywords: List[str]
    social_caption: str