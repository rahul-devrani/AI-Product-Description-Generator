from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import router
from app.auth_routes import router as auth_router

app = FastAPI(
    title="AI Product Description Generator API",
    version="1.0.0",
    description="Backend API"
)

origins = [
    "http://localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Backend is Running"
    }