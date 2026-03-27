import express, { Router } from 'express'
import  { loginController, registerController } from '../controllers/authController.js'

const router = express.Router()

// routes
// register
router.post('/register',registerController)

// login route || post

router.post('/login', loginController)

export default router