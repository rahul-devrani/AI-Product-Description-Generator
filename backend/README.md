# AI Product Description Generator - Backend

## Overview

This is the backend service for the **AI Product Description Generator** project developed using **FastAPI**.

The backend provides REST APIs to generate AI-based product content using Google's Gemini API, manage generated products, search products, and perform CRUD operations. Product data is stored in MongoDB Atlas using PyMongo, providing persistent database storage and complete CRUD functionality.

---

## Live Backend

**Base URL**

https://ai-product-description-generator-vlqe.onrender.com

**Swagger Documentation**

https://ai-product-description-generator-vlqe.onrender.com/docs

---

# Tech Stack

* Python
* FastAPI
* Uvicorn
* PyMongo
* MongoDB Atlas
* Pydantic
* Firebase Admin SDK
* JWT
* Bcrypt
* SlowAPI
* Google Gemini API
* google-genai SDK

## Deployment

**Backend Hosting:** Render

**Database:** MongoDB Atlas

**Authentication:** Firebase Authentication

**AI Model:** Google Gemini API

---

## Known Limitations

- Render free tier spins down after inactivity.
- First request may take around 30–60 seconds.
- Gemini API usage depends on available quota.

---

## Database Choice

This backend uses **MongoDB Atlas** as the primary database.

MongoDB was chosen because product information follows a document-based structure, making it suitable for flexible schemas. PyMongo provides seamless integration with FastAPI for performing CRUD operations and persistent data storage.

---

# Project Structure

```
backend
│
├── app
│   ├── main.py
│   ├── routes.py
│   ├── models.py
│   └── config.py
│   └── auth_dependency.py
│   └── auth_models.py
│   └── auth_routes.py
│   └── auth_utils.py
│   └── database.py
│   └── gemini_service.py
│   └── limiter.py
│
├── requirements.txt
├── .env.example
├── README.md
```

---

## Current Architecture

```text
User
        │
        ▼
React Frontend
        │
        ▼
Axios API Calls
        │
        ▼
FastAPI Backend
        │
        ▼
Gemini API
        │
        ▼
JSON Response
        │
        ▼
MongoDB Atlas
        │
        ▼
React UI
```
---

## Database Schema

The application uses **MongoDB Atlas** as the cloud database and consists of two collections:

### users
Stores registered user information such as:
- Name
- Email Address
- Encrypted Password

### products
Stores AI-generated product information such as:
- Product Name
- Ingredients
- Weight
- Key Features
- Tone
- Generated Title
- Description
- Tagline
- SEO Keywords
- Social Media Caption

Each product is associated with the authenticated user, ensuring that users can access and manage only their own generated content.

![Database Schema](images/database-schema.png)

---

# Features

* RESTful API Development
* AI Product Description Generation
* Product CRUD Operations
* Search Products
* Swagger API Documentation
* CORS Enabled
* Request Validation using Pydantic
* Proper HTTP Status Codes
* Error Handling
* MongoDB Atlas Integration
* Persistent Database Storage
* JWT Authentication
* Google OAuth Authentication
* Password Hashing using bcrypt
* Password Validation
* Protected Routes
* User-Specific CRUD Operations
* Authentication Rate Limiting
---

# API Endpoints

| Method | Endpoint          | Description                 |
| ------ | ----------------- | ----------------------------|
| GET    | /                 | Check Backend Status        |
| GET    | /products         | Get All Products            |
| GET    | /products/{id}    | Get Product By ID           |
| POST   | /generate         | Generate AI Product Content |
| PUT    | /products/{id}    | Update Product              |
| DELETE | /products/{id}    | Delete Product              |
| GET    | /search?q=keyword | Search Products             |
| POST   | /auth/register    | Register User               |
| POST   | /auth/login       | Login User                  |
| POST   | /auth/google      | Google Login                |

---

# How to Run Backend Locally

## Clone Repository

```bash
git clone https://github.com/rahul-devrani/AI-Product-Description-Generator.git
```

---

## Navigate to Backend

```bash
cd backend
```

---

## Create Virtual Environment

```bash
python -m venv venv
```

---

## Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

---

## Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Run FastAPI Server

```bash
uvicorn app.main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

Swagger Documentation:

```
http://127.0.0.1:8000/docs
```

---

## Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
MONGO_URI = ur_mongodb_connection_string
JWT_SECRET = ur_jwt_secret
GEMINI_API_KEY = ur_gemini_key
```
---

# Future Improvements

* PDF Export
* Generation History
* Multiple AI Tones
* Multi-language Support
* AI Prompt Versioning

---

# Developed By

**Rahul Devrani**

B.Tech CSE (AI & Data Science)

Graphic Era University

TBI-GEU Summer Internship Program 2026
