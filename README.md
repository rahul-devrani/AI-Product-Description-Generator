# ProDescription AI

An AI-powered web application designed to help food processing businesses create professional, SEO-friendly, and engaging product content for e-commerce platforms. The platform enables users to generate product descriptions, titles, taglines, keywords, and promotional content using AI.

---

## Project Overview

Many small and medium food processing businesses struggle to create compelling product listings for online marketplaces due to limited marketing resources and content-writing expertise.

ProDescription AI simplifies this process by allowing users to enter product information such as product name, ingredients, weight, and key features. The application then generates high-quality content tailored for e-commerce platforms.

---

## Features

### Content Generation

* AI-powered Product Description Generation
* Product Title Generation
* Product Tagline Generation
* Social Media Caption Generation

### Content Optimization

* SEO Keyword Recommendations
* Tone-Based Content Customization
* AI-Assisted Content Regeneration

### User Experience

* Clean and Responsive User Interface
* Multi-Page Navigation
* Dashboard Overview
* Mobile-Friendly Design

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Tailwind CSS
* Vite

### Backend

* FastAPI

### Database

* In-Memory Storage (Current)
* MongoDB Atlas (Planned)

### AI Integration

* Rule-Based Content Generator (Current)
* Google Gemini API (Planned)

### Deployment

* Vercel (Planned)
* Render (Planned)

---

## Project Structure

```text
## Project Structure

│
├── frontend
│   ├── src
│   │   ├── assets
│   │   │   └── Images and static resources
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   │
│   │   │   └── ui
│   │   │       ├── Button.jsx
│   │   │       ├── Input.jsx
│   │   │       ├── Modal.jsx
│   │   │       ├── Toast.jsx
│   │   │       ├── Loader.jsx
│   │   │       └── index.js
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Generate.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend
│
├── .gitignore
└── README.md
```

---
## Backend

The backend is built using FastAPI and provides RESTful APIs for product content generation and management.

### Available APIs

- GET /
- GET /products
- GET /products/{id}
- POST /generate
- PUT /products/{id}
- DELETE /products/{id}
- GET /search

---

## Current Status

### Completed

- GitHub Repository Initialized
- React + Vite Frontend
- Tailwind CSS Configuration
- Responsive UI
- Multi-Page Routing
- Dashboard Page
- Generate Page
- Component Library
- FastAPI Backend
- RESTful CRUD APIs
- Search API
- Swagger API Documentation
- Frontend–Backend Integration using Axios
- Dark / Light Mode
- Error Handling & Loading States

### Upcoming

- MongoDB / PostgreSQL Integration
- Google Gemini API Integration
- User Authentication (JWT)
- Product History
- PDF Export
- Deployment (Vercel + Render)

---

## Author

Rahul Devrani

Technology Business Incubator (TBI-GEU)

Summer Internship Program 2026
