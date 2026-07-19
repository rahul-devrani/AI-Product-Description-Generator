from fastapi import APIRouter, HTTPException, status, Response
from app.gemini_service import generate_product_content
from app.models import ProductRequest, Product
from app.database import products_collection
from fastapi import Depends
from app.auth_dependency import get_current_user


router = APIRouter()


def get_next_id():

    last_product = products_collection.find_one(
        sort=[("id", -1)]
    )

    if last_product:

        return last_product["id"] + 1

    return 1


def product_to_model(product):

    return Product(

        id=product["id"],

        product_name=product["product_name"],

        ingredients=product["ingredients"],

        weight=product["weight"],

        key_features=product["key_features"],

        tone=product["tone"],

        title=product["title"],

        description=product["description"],

        tagline=product["tagline"],

        seo_keywords=product["seo_keywords"],

        social_caption=product["social_caption"]

    )


@router.get(
    "/products",
    status_code=status.HTTP_200_OK
)
def get_products(
    current_user=Depends(get_current_user)):

    products = list(
        products_collection.find(
            {
                "user_email": current_user["sub"]
            },
            {
                "_id": 0
            }
        )
    )

    if not products:
        return {
            "message": "No products found.",
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
def get_product(
    product_id: int,
    current_user=Depends(get_current_user)):

    product = products_collection.find_one(

        {
            "id": product_id,
            "user_email": current_user["sub"]
        },

        {

            "_id": 0

        }

    )

    if not product:

        raise HTTPException(

            status_code=status.HTTP_404_NOT_FOUND,

            detail="Product not found."

        )

    return product_to_model(product)


@router.post(
    "/generate",
    response_model=Product,
    status_code=status.HTTP_201_CREATED
)
def generate_product(
    product: ProductRequest,
    current_user=Depends(get_current_user)):

    generated = generate_product_content(
        product.product_name,
        product.ingredients,
        product.weight,
        product.key_features,
        product.tone
    )

    new_product = {

        "id": get_next_id(),
        "user_email": current_user["sub"],

        "product_name": product.product_name,

        "ingredients": product.ingredients,

        "weight": product.weight,

        # "category": product.category,

        "key_features": product.key_features,

        "tone": product.tone,

        "title": generated["title"],

        "description": generated["description"],

        "tagline": generated["tagline"],

        "seo_keywords": generated["seo_keywords"],

        "social_caption": generated["social_caption"],


    }

    products_collection.insert_one(new_product)

    return product_to_model(new_product)





















@router.put(
    "/products/{product_id}",
    response_model=Product,
    status_code=status.HTTP_200_OK
)
def update_product(
    product_id: int,
    updated_product: Product,
    current_user=Depends(get_current_user)
):

    existing_product = products_collection.find_one(
        {
            "id": product_id,
            "user_email": current_user["sub"]
        }
    )

    if not existing_product:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found."
        )

    updated_data = updated_product.model_dump()

    updated_data["id"] = product_id

    products_collection.update_one(
        {
            "id": product_id,
            "user_email": current_user["sub"]
        },
        {
            "$set": updated_data
        }
    )

    updated = products_collection.find_one(
        {
            "id": product_id,
            "user_email": current_user["sub"]
        },
        {"_id": 0}
    )

    return product_to_model(updated)



@router.delete(
    "/products/{product_id}",
    status_code=status.HTTP_204_NO_CONTENT
)
def delete_product(
    product_id: int,
    current_user=Depends(get_current_user)):

    result = products_collection.delete_one(
        {
            "id": product_id,
            "user_email": current_user["sub"]
        }
    )

    if result.deleted_count == 0:

        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found."
        )

    return Response(
        status_code=status.HTTP_204_NO_CONTENT
    )


@router.get(
    "/search",
    status_code=status.HTTP_200_OK
)
def search_products(
    q: str,
    current_user=Depends(get_current_user)):

    products = list(
        products_collection.find(
                {
                "user_email": current_user["sub"],

                "$or":[
                    {
                        "product_name": {
                            "$regex": q,
                            "$options": "i"
                        }
                    },

                                        {
                        "ingredients": {
                            "$regex": q,
                            "$options": "i"
                        }
                    },
                    {
                        "key_features": {
                            "$regex": q,
                            "$options": "i"
                        }
                    },
                    {
                        "tone": {
                            "$regex": q,
                            "$options": "i"
                        }
                    }
                ]
            },
            {
                "_id": 0
            }
        )
    )

    return {

        "count": len(products),

        "products": products

    }