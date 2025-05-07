# 🔗 URL Shortener

A full-stack URL shortener web app built with:

- **Frontend:** Next.js (React + TypeScript)
- **Backend:** Node.js + Express.js + MongoDB
- Developed by: **Shubham Sharma** (your brother 😄)

---

## ✨ Features

- Shorten any valid URL with a user-friendly frontend
- Unique short code generation using `shortid`
- Redirection to original long URL using Express routes
- RESTful API
- MongoDB storage
- Simple and responsive UI

---

## 🛠️ Tech Stack

| Layer      | Technology                 |
|------------|----------------------------|
| Frontend   | Next.js, TypeScript, Axios |
| Backend    | Node.js, Express.js        |
| Database   | MongoDB, Mongoose          |
| Utilities  | shortid, valid-url, dotenv |

---

## 📁 Folder Structure
```
url-shortener/
├── client/ # Frontend (Next.js)
│ ├── pages/
│ │ └── index.tsx # URL input form + results
│ └── components/ # Reusable UI components
├── server/ # Backend (Express)
│ ├── models/Url.js # Mongoose schema
│ ├── routes/url.js # URL shorten + redirect
│ └── app.js # Server entry point
├── .env # Environment variables
└── README.md # You're here!

```