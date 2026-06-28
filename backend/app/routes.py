from fastapi import APIRouter, HTTPException, status, Response

from app.models import ProductRequest, Product
from app.data import products

router = APIRouter()


@router.get(
    "/products",
    status_code=status.HTTP_200_OK
)
def get_products():

    if not products:

        return {
            "message": "No products generated yet. Database not connected.",
            "products": []
        }

    return {
        "message": "Products fetched successfully.",
        "products": products
    }


@router.get(
    "/products/{product_id}",
    response_model=Product,
    status_code=status.HTTP_200_OK
)
def get_product(product_id: int):

    for product in products:

        if product.id == product_id:

            return product

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Product not found."
    )


@router.post(
    "/generate",
    response_model=Product,
    status_code=status.HTTP_201_CREATED
)
def generate_product(product: ProductRequest):

    new_product = Product(

        id=len(products) + 1,

        product_name=product.product_name,

        ingredients=product.ingredients,

        weight=product.weight,

        key_features=product.key_features,

        tone=product.tone,

        title=f"{product.tone} {product.product_name}",

        description=(
            f"{product.product_name} is a premium quality product made using "
            f"{product.ingredients}. It comes in {product.weight} packaging "
            f"and offers {product.key_features.lower()}."
        ),

        tagline=f"Experience the goodness of {product.product_name}.",

        seo_keywords=[
            product.product_name.lower(),
            product.tone.lower(),
            "food product",
            "healthy",
            "premium quality"
        ],

        social_caption=(
            f"✨ Discover {product.product_name}! "
            f"Fresh, healthy and crafted with quality ingredients."
        )

    )

    products.append(new_product)

    return new_product


@router.put(
    "/products/{product_id}",
    response_model=Product,
    status_code=status.HTTP_200_OK
)
def update_product(
    product_id: int,
    updated_product: Product
):

    for index, product in enumerate(products):

        if product.id == product_id:

            updated_product.id = product_id

            products[index] = updated_product

            return updated_product

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Product not found."
    )


@router.delete(
    "/products/{product_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_product(product_id: int):

    for product in products:

        if product.id == product_id:

            products.remove(product)

            return Response(
                status_code=status.HTTP_204_NO_CONTENT
            )

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="Product not found."
    )


@router.get(
    "/search",
    status_code=status.HTTP_200_OK
)
def search_products(q: str):

    result = []

    for product in products:

        if (

            q.lower() in product.product_name.lower()

            or

            q.lower() in product.tone.lower()

        ):

            result.append(product)

    return {

        "count": len(result),

        "products": result

    }