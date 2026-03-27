# Food & Restaurant Backend API

## Project Overview

This project is a backend API for a food and restaurant application. It provides authentication and full CRUD functionality for users, food items, categories, and restaurants.

The application is built using Node.js and Express, with MongoDB as the database. It follows a modular and scalable architecture suitable for real-world backend development.

---

## Features

### Authentication & Security
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using middleware
- Token verification system

### User Management
- Get user profile
- Update user profile
- Reset password (security answer-based)
- Update password with old password verification
- Delete user account

### Food Management
- Create food items
- Get all food items
- Get food by ID
- Get food by restaurant
- Update food details
- Delete food
- Automatic category handling (auto-create if not exists)

### Restaurant Management
- Create restaurant
- Get all restaurants
- Get restaurant by ID
- Delete restaurant

### Category Management
- Create category
- Get all categories
- Update category
- Delete category

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JSON Web Token (JWT)  
- bcrypt.js  
- dotenv  
- morgan  
- cors  

---

## Project Structure

```
config/
controllers/
middlewares/
models/
routes/
server.js
```

---

## Authentication Flow

1. User logs in and receives a JWT token  
2. Token is sent in request headers  
   Authorization: Bearer <token>  
3. Middleware verifies the token  
4. Access is granted to protected routes  

---

## API Endpoints

### Authentication
- POST /api/v1/auth/register  
- POST /api/v1/auth/login  

### User (Protected)
- GET /api/v1/user/getuser  
- PUT /api/v1/user/updateuser  
- POST /api/v1/user/resetpassword  
- POST /api/v1/user/updatepassword  
- DELETE /api/v1/user/delete/:id  

### Food (Protected)
- POST /api/v1/food/create  
- GET /api/v1/food/get-all-foods  
- GET /api/v1/food/getfood/:id  
- GET /api/v1/food/get-food-by-res/:id  
- PUT /api/v1/food/update/:id  
- DELETE /api/v1/food/delete/:id  

### Restaurant
- POST /api/v1/restaurant/create (Protected)  
- GET /api/v1/restaurant/get-all  
- GET /api/v1/restaurant/get/:id  
- DELETE /api/v1/restaurant/delete/:id (Protected)  

### Category
- POST /api/v1/category/create (Protected)  
- GET /api/v1/category/get-all-cat  
- PUT /api/v1/category/update/:id (Protected)  
- DELETE /api/v1/category/delete/:id (Protected)  

---

## Installation & Setup

1. Clone the repository:
```
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project directory:
```
cd your-repo-name
```

3. Install dependencies:
```
npm install
```

4. Create a `.env` file and add the following:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Run the server:
```
npm run dev
```

---

## Database

MongoDB is used as the primary database and is connected using Mongoose.

Main collections:
- User
- Food
- Category
- Restaurant

---

## Future Improvements

- Role-based authentication (admin/user)
- Input validation using Joi or similar library
- Pagination and filtering
- Image upload integration (e.g., Cloudinary)

---

## Author

Ravi Raj Gupta

---

## Summary

This project demonstrates backend development skills including API design, authentication, middleware usage, and database management. It is suitable for learning purposes and portfolio presentation.