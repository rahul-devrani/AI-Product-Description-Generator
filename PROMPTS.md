# PROMPTS.md

# AI Product Description Generator

## Objective

This document records the prompt engineering process used while developing the AI Product Description Generator.

The objective was to identify the most effective prompt for generating structured marketing content for food products using Google's Gemini AI.

The application generates:

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

---

## Example Input

Product Name: Mixed Fruit Jam

Ingredients: Apple, Mango, Strawberry, Sugar

Weight: 500 g

Key Features: Rich fruit flavour, No artificial colours

Tone: Friendly

---

## Example Output

"Our Mixed Fruit Jam is prepared using carefully selected fruits to deliver a delicious taste. It is ideal for breakfast, desserts, and snacks."

---

## Observation

- Generated only a product description.
- No product title.
- No tagline.
- No SEO keywords.
- No social media caption.
- Output format was plain text and difficult to parse programmatically.

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

---

## Example Input

Product Name: Mango Juice

Ingredients: Mango Pulp, Water, Sugar

Weight: 1 Litre

Key Features: Rich in Vitamin C, No Artificial Flavours

Tone: Healthy

---

## Example Output

{
"title":"Fresh Mango Juice",
"tagline":"Taste the Goodness of Real Mangoes",
"description":"...",
"seo_keywords":[...],
"social_caption":"..."
}

---

## Observation

- Generated all required fields.
- Overall content quality improved.
- JSON formatting was sometimes inconsistent.
- Occasionally included markdown (```json) which required additional parsing.

---

# Prompt Version 3 (Final Prompt)

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
"title":"...",
"description":"...",
"tagline":"...",
"seo_keywords":[
"...",
"...",
"...",
"...",
"..."
],
"social_caption":"..."
}

Rules:

- Return ONLY valid JSON.
- Do not include markdown formatting.
- Do not include ```json blocks.
- Generate a product description between 80–120 words.
- Generate exactly five SEO keywords.
- Ensure the content matches the selected tone.
- Do not include any explanation outside the JSON response.

---

## Example Input

Product Name: Orange Juice

Ingredients: Fresh Orange Juice, Vitamin C

Weight: 1 Litre

Key Features: No Added Sugar, Rich in Vitamin C, Fresh Taste

Tone: Healthy

---

## Example Output

{
"title":"Pure Fresh Orange Juice (1L)",
"description":"Enjoy the refreshing taste of freshly squeezed oranges with our Pure Fresh Orange Juice. Carefully prepared using premium oranges, this healthy beverage contains no added sugar and is naturally rich in Vitamin C. Perfect for breakfast, post-workout refreshment, or any time you need a nutritious drink. Every sip delivers freshness, natural flavour, and wholesome goodness for the entire family.",
"tagline":"Freshness in Every Sip.",
"seo_keywords":[
"orange juice",
"healthy juice",
"vitamin c drink",
"fresh fruit juice",
"no added sugar juice"
],
"social_caption":"Start your day with the refreshing taste of pure oranges! 🍊 Packed with natural goodness and Vitamin C for a healthier lifestyle."
}

---

# Observation

The final prompt consistently produced:

- Accurate product titles
- Creative taglines
- Well-structured descriptions
- Exactly five SEO keywords
- Relevant social media captions
- Valid JSON responses that could be directly parsed by the FastAPI backend

The additional constraints significantly reduced formatting issues and eliminated markdown wrappers.

---

# Best Prompt

The third prompt was selected for the final implementation because it consistently generated structured JSON responses with high-quality marketing content.

Compared to the previous versions, it reduced formatting inconsistencies, prevented markdown output, and produced responses that could be parsed directly by the backend without additional modifications. The generated content was also more consistent with the selected writing tone.

---

# System Role Used

```
You are an expert e-commerce copywriter.
```

This role encouraged the model to generate marketing-oriented content suitable for e-commerce platforms while maintaining a professional writing style.

---

# AI Model

Google Gemini Flash

---

# Prompt Engineering Techniques Used

- Role Prompting
- Context Injection
- Structured JSON Output
- Constraint-based Prompting
- Output Formatting Instructions
- Tone-based Content Generation
- Response Length Control

---

# Future Improvements

- Multi-language product descriptions
- Industry-specific prompt templates
- Multiple AI-generated content variations
- Product image-based prompt generation
- Personalized writing styles
- Automatic A/B testing of generated marketing content