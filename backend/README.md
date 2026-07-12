# AI Product Description Generator - Backend

## Overview

This is the backend service for the **AI Product Description Generator** project developed using **FastAPI**.

The backend provides REST APIs to generate AI-based product content, manage generated products, search products, and perform CRUD operations. Product data is stored in MongoDB Atlas using PyMongo, providing persistent database storage and complete CRUD functionality.

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
│   └── database.py
│
├── requirements.txt
├── .env.example
├── README.md
```

---

## Current Architecture

```text
React Frontend
        │
        ▼
Axios API Calls
        │
        ▼
FastAPI Backend
        │
        ▼
MongoDB Atlas
```
---

## Database Schema

The application stores generated product information in a MongoDB collection named `products`.

![Database Schema](../images/schema-diagram.jpg)

---

# Features

* RESTful API Development
* Product Description Generation
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

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| GET    | /                 | Check Backend Status     |
| GET    | /products         | Get All Products         |
| GET    | /products/{id}    | Get Product By ID        |
| POST   | /generate         | Generate Product Content |
| PUT    | /products/{id}    | Update Product           |
| DELETE | /products/{id}    | Delete Product           |
| GET    | /search?q=keyword | Search Products          |
| POST   | /auth/register    | Register User            |
| POST   | /auth/login       | Login User               |
| POST   | /auth/google      | Google Login             |

---

# How to Run Backend Locally

## Clone Repository

```bash
git clone <repository-url>
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
```
---

# Future Improvements

* Gemini API Integration
* PDF Export 
* Deployment 

---

# Developed By

**Rahul Devrani**

B.Tech CSE (AI & Data Science)

Graphic Era University

TBI-GEU Summer Internship Program 2026
