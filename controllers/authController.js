// register

import userModel from "../models/userModel.js";
import bcrypt, { genSalt } from "bcryptjs";
import jwt from "jsonwebtoken";
const registerController = async (req, res) => {
   try {
      const { username, email, password, phone, address, answer } = req.body;
      if (!username || !email || !phone || !address || !password || !answer) {
         return res.send({
            success: false,
            message: "please provide all fields",
         });
      }
      const existing = await userModel.findOne({ email });
      if (existing) {
         return res.send({
            success: false,
            message: "email already registered please login",
         });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(password, salt); // create new user
      const user = await userModel.create({
         username,
         email,
         password: hashedpassword,
         address,
         phone,
         answer
      });
      res.status(201).send({
         success: true,
         message: "successfully registered",
      });
   } catch (error) {
      res.status(500).send({
         message: error.message,
         success: false,
      });
   }
};

// login controller
const loginController = async (req, res) => {
   try {
      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(500).send({
            success: false,
            message: "please provide email or password",
         });
      }
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.status(404).send({
            success: false,
            message: "user not found",
         });
      }

      // compare password
      const isMatch = await bcrypt.compare(password, user.password)

      if(!isMatch){
         return res.status(500).send({
            success:false,
            message:" invalid Credential"
         })
      }

      const token = jwt.sign({id:user._id}, process.env.JWT_SECRET,{
         expiresIn: "7d"
      })
      res.status(200).send({
         success: true,
         message: " login successfully",
         token,
         user,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: error.message,
      });
   }
};

export { registerController, loginController };
