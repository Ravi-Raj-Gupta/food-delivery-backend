import express from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createCatController, deleteCatController, getallCatController, udpateCatController } from "../controllers/categoryController.js"
import { getallRestaurantController } from "../controllers/restaurantController.js"
import { updateUserController } from "../controllers/userController.js"

const router = express.Router()

// routes
router.post('/create', authMiddleware, createCatController)

// get all cat
router.get('/get-all-cat', getallCatController )


// update category
router.put('/update/:id', authMiddleware, udpateCatController)


// delete cat

router.delete('/delete/:id',authMiddleware, deleteCatController)
export default router