import { response } from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";



const getuserController = async (req, res) => {
   try {
      // ✅ correct way
      const user = await User.findById(req.user.id).select("-password");

      if (!user) {
         return res.status(404).send({
            success: false,
            message: "user not found",
         });
      }

      res.status(200).send({
         success: true,
         message: "user get successfully",
         user,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in get user api",
         error,
      });
   }
};

// update user
const updateUserController = async (req, res) => {
   try {
      const user = await User.findById(req.user.id);

      if (!user) {
         return res.status(404).send({
            success: false,
            message: "user not found",
         });
      }

      // ✅ safety
      const { username, address, phone } = req.body || {};

      if (!username && !address && !phone) {
         return res.status(400).send({
            success: false,
            message: "please provide at least one field to update",
         });
      }

      if (username) user.username = username;
      if (address) user.address = address;
      if (phone) user.phone = phone;

      await user.save();

      res.status(200).send({
         success: true,
         message: "user updated successfully",
         user
      });

   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in update user api",
      });
   }
};

// reset password
const resetpasswordController = async (req, res) => {
   try {
      const { email, newpassword, answer } = req.body;

      if (!email || !newpassword || !answer) {
         return res.status(500).send({
            success: false,
            message: "please provide all fields",
         });
      }
      const user = await User.findOne({ email, answer });
      if (!user) {
         return res.status(500).send({
            success: false,
            message: "user not found or invalid answer",
         });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(newpassword, salt); // create new user

      user.password = hashedpassword;
      await user.save();

      res.status(200).send({
         success: true,
         message: "password reset successfully",
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in password reset api",
         error,
      });
   }
};

// UPDATE user passowrd
const updatepasswordController = async (req, res) => {
   try {
      // find user
      const user = await User.findById(req.user.id);
      if (!user) {
         return res.status(404).send({
            success: false,
            message: "user not found",
         });
      }
      // get data from user
      const { oldpass, newpass } = req.body;
      if (!newpass || !oldpass) {
         return res.status(404).send({
            success: false,
            message: "missing field",
         });
      }
      const isMatch = await bcrypt.compare(oldpass, user.password);

      if (!isMatch) {
         return res.status(500).send({
            success: false,
            message: " invalid old password"
         });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedpassword = await bcrypt.hash(newpass, salt); // create new user
      user.password= hashedpassword

      await user.save();
      res.status(200).send({
         success: true,
         message: "password updated successfully"
      })
   } 
   catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in password update api",
         error,
      });
   }
};


// DELETE USER

const deleteUserController = async (req, res) => {
   try {
      await User.findByIdAndDelete(req.params.id)
      return res.status(200).send({
         success:true,
         message: "your account has been deleted"
      });

   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in delete user api",
         error
      });
   }
};


export {
   getuserController,
   updateUserController,
   resetpasswordController,
   updatepasswordController,
   deleteUserController
};
