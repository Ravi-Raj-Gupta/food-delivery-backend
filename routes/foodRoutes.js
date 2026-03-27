import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createFoodController, deleteFoodController, getallfoodController, getbyrestaurant, getSingleFoodController, updateFoodController } from "../controllers/foodController.js"

const router = express.Router()

// routes
router.post('/create', authMiddleware, createFoodController)


// get all routes

router.get('/get-all-foods', authMiddleware, getallfoodController)

// get foods by id 
router.get('/getfood/:id', authMiddleware, getSingleFoodController)

// get by restaurant id
router.get('/get-food-by-res/:id', authMiddleware, getbyrestaurant)

// update food route

router.put('/update/:id', authMiddleware, updateFoodController)


// delete food route
router.delete('/delete/:id', authMiddleware, deleteFoodController)



export default router