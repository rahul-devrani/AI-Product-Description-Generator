from fastapi import APIRouter, HTTPException
from app.data import products
from app.models import Product

router = APIRouter()


# get all products
@router.get("/products", response_model=list[Product])
def get_products():
    return products


# get single product
@router.get("/products/{product_id}", response_model=Product)
def get_product(product_id: int):
    for product in products:
        if product.id == product_id:
            return product

    raise HTTPException(status_code=404, detail="Product not found")


# post generate product
@router.post("/generate", response_model=Product, status_code=201)
def generate_product(product: Product):
    products.append(product)
    return product


# put update product
@router.put("/products/{product_id}", response_model=Product)
def update_product(product_id: int, updated_product: Product):

    for index, product in enumerate(products):

        if product.id == product_id:
            products[index] = updated_product
            return updated_product

    raise HTTPException(status_code=404, detail="Product not found")


# delete product
@router.delete("/products/{product_id}", status_code=204)
def delete_product(product_id: int):

    for product in products:

        if product.id == product_id:
            products.remove(product)
            return

    raise HTTPException(status_code=404, detail="Product not found")


# search products
@router.get("/search")
def search_products(q: str):

    result = []

    for product in products:

        if q.lower() in product.product_name.lower():
            result.append(product)

    return result