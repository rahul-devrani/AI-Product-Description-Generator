from pydantic import BaseModel
from typing import List


class ProductRequest(BaseModel):
    product_name: str
    ingredients: str
    weight: str
    key_features: str
    tone: str


class Product(ProductRequest):
    id: int
    title: str
    description: str
    tagline: str
    seo_keywords: List[str]
    social_caption: str