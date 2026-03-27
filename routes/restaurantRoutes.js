import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { deleteRestaurantController, getallRestaurantController, getRestaurantControllerbyId, restaurantController } from "../controllers/restaurantController.js"

const router = express.Router()

// create restaurant 

router.post('/create' , authMiddleware, restaurantController)


// get all restaurants 
router.get('/get-all', getallRestaurantController)


// get single restaurant using id
router.get('/get/:id',getRestaurantControllerbyId)


// delete restaurant 
router.delete('/delete/:id', authMiddleware, deleteRestaurantController)
export default router