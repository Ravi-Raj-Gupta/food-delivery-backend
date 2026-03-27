# 🍔 Food & Restaurant Backend API

## 📌 Project Overview

This is a fully functional backend API for a Food & Restaurant application. It provides secure authentication and complete CRUD operations for users, food items, categories, and restaurants.

The backend is built using Node.js and Express, with MongoDB as the database, and follows a modular and scalable architecture.

---

## 🚀 Features

### 🔐 Authentication & Security
- User Registration & Login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Token verification system

### 👤 User Management
- Get user profile
- Update user profile
- Reset password (security answer-based)
- Update password (with old password verification)
- Delete user account

### 🍔 Food Management
- Create food items
- Get all food items
- Get food by ID
- Get food by restaurant
- Update food details
- Delete food
- Automatic category handling (auto-create if not exists)

### 🏪 Restaurant Management
- Create restaurant
- Get all restaurants
- Get restaurant by ID
- Delete restaurant

### 🏷️ Category Management
- Create category
- Get all categories
- Update category
- Delete category

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (JSON Web Token)  
- bcrypt.js  
- dotenv  
- morgan  
- cors  

---

## ⚙️ Project Structure

```
config/
controllers/
middlewares/
models/
routes/
server.js
```

---

## 🔑 Authentication Flow

1. User logs in and receives a JWT token  
2. Token is sent in headers:  
   Authorization: Bearer <token>  
3. Middleware verifies token  
4. Protected routes are accessed securely  

---

## 📡 API Endpoints

### 🔐 Auth Routes
- POST /api/v1/auth/register  
- POST /api/v1/auth/login  

---

### 👤 User Routes (Protected)
- GET /api/v1/user/getuser  
- PUT /api/v1/user/updateuser  
- POST /api/v1/user/resetpassword  
- POST /api/v1/user/updatepassword  
- DELETE /api/v1/user/delete/:id  

---

### 🍔 Food Routes (Protected)
- POST /api/v1/food/create  
- GET /api/v1/food/get-all-foods  
- GET /api/v1/food/getfood/:id  
- GET /api/v1/food/get-food-by-res/:id  
- PUT /api/v1/food/update/:id  
- DELETE /api/v1/food/delete/:id  

---

### 🏪 Restaurant Routes
- POST /api/v1/restaurant/create (Protected)  
- GET /api/v1/restaurant/get-all  
- GET /api/v1/restaurant/get/:id  
- DELETE /api/v1/restaurant/delete/:id (Protected)  

---

### 🏷️ Category Routes
- POST /api/v1/category/create (Protected)  
- GET /api/v1/category/get-all-cat  
- PUT /api/v1/category/update/:id (Protected)  
- DELETE /api/v1/category/delete/:id (Protected)  

---

## ⚙️ Installation & Setup

1. Clone the repository:
```
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to project:
```
cd your-repo-name
```

3. Install dependencies:
```
npm install
```

4. Create `.env` file:
```
PORT=5000
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

5. Run the server:
```
npm run dev
```

---

## 🗄️ Database

- MongoDB is used as the primary database  
- Connected using Mongoose  
- Models include:
  - User  
  - Food  
  - Category  
  - Restaurant  

---

## ⚠️ Notes & Improvements

- Role-based authentication (Admin/User) can be added  
- Input validation can be improved using libraries like Joi  
- Pagination & filtering can be implemented for better performance  
- Image upload support (Cloudinary) can be added  

---

## 👨‍💻 Author

Ravi Raj Gupta  

---

## ⭐ Conclusion

This project demonstrates backend development skills including API design, authentication, middleware handling, and database management. It is suitable for learning, practice, and portfolio showcasing.