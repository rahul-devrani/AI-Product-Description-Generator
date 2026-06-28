from app.models import Product

products = [
    Product(
        id=1,
        product_name="Organic Honey",
        ingredients="Pure Natural Honey",
        weight="500g",
        key_features="No Added Sugar, Natural, Rich in Antioxidants",
        tone="Premium",
        description="Pure organic honey collected from natural sources.",
        title="Premium Organic Honey",
        tagline="Nature's Sweetness in Every Drop",
        seo_keywords=[
            "organic honey",
            "pure honey",
            "natural honey"
        ],
        social_caption="Enjoy the goodness of pure organic honey every day."
    ),

    Product(
        id=2,
        product_name="Millet Cookies",
        ingredients="Millets, Jaggery, Butter",
        weight="250g",
        key_features="Healthy Snack, High Fiber",
        tone="Health Focused",
        description="Healthy millet cookies made with natural ingredients.",
        title="Healthy Millet Cookies",
        tagline="Healthy Snacking Made Easy",
        seo_keywords=[
            "millet cookies",
            "healthy cookies",
            "fiber rich snacks"
        ],
        social_caption="Switch to healthier snacking with our millet cookies."
    ),

    Product(
        id=3,
        product_name="Apple Pickle",
        ingredients="Apple, Spices, Mustard Oil",
        weight="400g",
        key_features="Traditional Taste, Homemade Style",
        tone="Traditional",
        description="Traditional homemade apple pickle with authentic flavor.",
        title="Traditional Apple Pickle",
        tagline="Taste the Tradition",
        seo_keywords=[
            "apple pickle",
            "traditional pickle",
            "homemade pickle"
        ],
        social_caption="Bring home the authentic taste of traditional apple pickle."
    )
]