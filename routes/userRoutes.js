import express, { Router } from "express"
import { deleteUserController, getuserController, resetpasswordController, updatepasswordController, updateUserController } from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routes
// get
router.get('/getuser',authMiddleware, getuserController)


// update profile
router.put('/updateuser', authMiddleware, updateUserController)


// reset password
router.post('/resetpassword', authMiddleware, resetpasswordController)


// update password
router.post('/updatepassword' , authMiddleware, updatepasswordController)

// delete user
router.delete('/delete/:id', authMiddleware, deleteUserController)

export default router