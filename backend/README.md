# AI Product Description Generator - Backend

## Overview

This is the backend service for the **AI Product Description Generator** project developed using **FastAPI**.

The backend provides REST APIs to generate AI-based product content, manage generated products, search products, and perform CRUD operations. Currently, product data is stored in-memory. Database integration will be added in future development.

---

# Tech Stack

* Python
* FastAPI
* Uvicorn
* Pydantic
* Python Dotenv

---

# Project Structure

```
backend
│
├── app
│   ├── main.py
│   ├── routes.py
│   ├── models.py
│   └── data.py
│
├── requirements.txt
├── .env.example
├── README.md
└── venv/
```

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

# Environment Variables

No environment variables are required for the current version of this project.

The `.env.example` file is included for future integrations.
```

---

# Future Improvements

* Gemini API Integration
* PostgreSQL / Supabase Database
* User Authentication
* Product History
* PDF Export


---

# Developed By

**Rahul Devrani**

B.Tech CSE (AI & Data Science)

Graphic Era University

TBI-GEU Summer Internship Program 2026
