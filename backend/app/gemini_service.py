import json
from google import genai

from app.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


def generate_product_content(
    product_name,
    ingredients,
    weight,
    key_features,
    tone
):

    prompt = f"""
You are an expert e-commerce copywriter.

Generate engaging marketing content for the following product.

Product Name: {product_name}
Ingredients: {ingredients}
Weight: {weight}
Key Features: {key_features}
Tone: {tone}

Return ONLY valid JSON in this format:

{{
  "title": "...",
  "description": "...",
  "tagline": "...",
  "seo_keywords": ["...", "...", "...", "...", "..."],
  "social_caption": "..."
}}

Rules:
- Return ONLY JSON.
- No markdown.
- No ```json.
- Description should be around 80-120 words.
"""

    response = client.models.generate_content(
    model="gemini-3.5-flash",
    contents=prompt,)

    text = response.text.strip()

    if text.startswith("```"):
        text = (
            text.replace("```json", "")
            .replace("```", "")
            .strip()
        )

    return json.loads(text)