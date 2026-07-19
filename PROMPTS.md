# PROMPTS.md

# AI Product Description Generator

## Objective

The purpose of this project is to generate professional marketing content for food products using Google's Gemini AI. Based on the product information provided by the user, the AI generates:

- Product Title
- Product Description
- Product Tagline
- SEO Keywords
- Social Media Caption

---

# Prompt Version 1

## Prompt

Generate a product description for the following product.

Product Name: {product_name}

Ingredients: {ingredients}

Weight: {weight}

Key Features: {key_features}

Tone: {tone}

## Observation

- Generated only a product description.
- No title or tagline.
- SEO keywords were missing.
- Output format was inconsistent.

---

# Prompt Version 2

## Prompt

Generate the following marketing content:

- Product Title
- Product Tagline
- Product Description
- SEO Keywords
- Social Media Caption

Product Name: {product_name}

Ingredients: {ingredients}

Weight: {weight}

Key Features: {key_features}

Tone: {tone}

Return the output as JSON.

## Observation

- Generated all required fields.
- Output quality improved.
- JSON formatting was occasionally inconsistent.

---

# Final Prompt

## Prompt

You are an expert e-commerce copywriter.

Generate engaging marketing content for the following product.

Product Name: {product_name}

Ingredients: {ingredients}

Weight: {weight}

Key Features: {key_features}

Tone: {tone}

Return ONLY valid JSON in the following format:

{
  "title": "...",
  "description": "...",
  "tagline": "...",
  "seo_keywords": [
    "...",
    "...",
    "...",
    "...",
    "..."
  ],
  "social_caption": "..."
}

Rules:

- Return ONLY valid JSON.
- Do not include markdown formatting.
- Do not include ```json blocks.
- Generate a product description between 80 and 120 words.
- Generate exactly five SEO keywords.
- Ensure the content matches the selected tone.
- Do not include any explanation outside the JSON response.

---

# Expected Output

{
  "title": "Organic Honey",
  "description": "A premium-quality natural honey sourced from carefully selected bee farms...",
  "tagline": "Nature's Sweetness in Every Spoon",
  "seo_keywords": [
    "Organic Honey",
    "Natural Honey",
    "Pure Honey",
    "Healthy Sweetener",
    "Premium Honey"
  ],
  "social_caption": "Experience the natural sweetness of our Organic Honey. Perfect for a healthy lifestyle."
}

---

# Why This Prompt Was Selected

The final prompt was selected because it consistently generated:

- Accurate product titles
- Creative taglines
- Well-structured product descriptions
- Relevant SEO keywords
- Engaging social media captions
- Valid JSON responses compatible with the FastAPI backend

The structured JSON output minimizes parsing errors and enables seamless integration with the React frontend.

---

# AI Model

Google Gemini Flash

---

# Prompt Engineering Techniques Used

- Role Prompting
- Structured Output (JSON)
- Constraint-based Prompting
- Context Injection
- Tone-based Content Generation
- Output Formatting Instructions

---

# Future Improvements

- Multi-language content generation
- Region-specific marketing content
- Multiple content variations
- Personalized writing styles
- Product image-based prompt generation