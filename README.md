# 🛠️ Backend Development Overview

Backend development powers the **logic, data, and communication** behind web and mobile applications.

---

## 🔑 Major Components

1. **Programming Languages (with Frameworks)**
   - Java
   - JavaScript / TypeScript
   - PHP
   - Go (Golang)
   - C++

2. **Databases**
   - MongoDB
   - MySQL
   - PostgreSQL
   - SQLite  
   *(via ORM / ODM tools such as Mongoose, Prisma, Sequelize, etc.)*

---

## 📡 What is a Server?

A **server** is a **software** that "serves" requests by:  
- Accepting incoming requests (from browser, mobile, or another service).  
- Executing backend logic (functions, controllers).  
- Interacting with the **database** (retrieve/store data).  
- Sending a response (usually **JSON**) back to the client.  

---

## 🔄 How Backend Works

- Backend can be **deployed on multiple systems**.  
- It contains **functions bound to routes** (endpoints).  
- A route may:  
  - Fetch data from a database.  
  - Store new data into a database.  
  - Call third-party APIs.  
- Response is usually **JSON**, but may include files or other data.  

---

## 🌐 Data Types Handled

- **Primitive Data** → `string`, `number`, `object`  
- **Files** → `image`, `pdf`, `video`, etc.  
- **Third-Party APIs** → Google Login, AWS File Upload, Payment APIs, etc.  

---

## ⚡ JavaScript-Based Backend

- **JS Runtimes**:
  - Node.js
  - Deno
  - Bun  

---

## 📁 Typical File Structure

```project-root/
│── package.json # Project metadata & dependencies
│── .env # Environment variables
│── README.md # Documentation
│── .gitignore # Git ignore file
│── .eslintrc / .prettierrc # Linting / formatting configs (optional)
│
└── src/
│── index.js # DB connection setup
│── app.js # Express app config, cookies, URL encoding
│
├── constants/ # Enums, DB names, constants
├── db/ # Database connection & setup
├── models/ # Data schemas (e.g. User, Product)
├── controllers/ # Request handlers / business logic
├── routes/ # Route definitions
├── middlewares/ # Auth, validation, logging, etc.
├── utils/ # Utility/helper functions
└── ... # Other modules (as needed)
```
