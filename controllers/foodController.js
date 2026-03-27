// create food

import mongoose from "mongoose";
import foodModel from "../models/foodModel.js";
import categoryModel from "../models/categoryModel.js";

const createFoodController = async (req, res) => {
   try {
      const {
         title,
         price,
         description,
         category,
         imageUrl,
         code,
         isAvailable,
         restaurant,
         rating,
         ratingCount,
         foodTags,
      } = req.body;

      if (!title || !description || !price) {
         return res.status(400).send({
            success: false,
            message: "please provide all the req fields",
         });
      }
      let categoryData = await categoryModel.findOne({
         title: { $regex: `^${category}$`, $options: "i" },
      });

      if (!categoryData) {
         categoryData = await categoryModel.create({ title: category });
      }
      if (!categoryData) {
         return res.status(404).send({
            success: false,
            message: "Category not found",
         });
      }

      const newfood = new foodModel({
         title,
         price,
         description,
         category: categoryData._id, // ✅ FIXED
         imageUrl,
         code,
         isAvailable,
         restaurant, // ⚠️ make sure this is valid ObjectId
         rating,
         ratingCount,
         foodTags,
      });

      await newfood.save();

      res.status(201).send({
         success: true,
         message: "new food item created",
         newfood,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in create food api",
         error,
      });
   }
};

// get all food

const getallfoodController = async (req, res) => {
   try {
      const foods = await foodModel.find({});
      if (!foods) {
         return res.status(404).send({
            success: false,
            message: "no food item found",
         });
      }
      res.status(200).send({
         success: true,
         totalFoods: foods.length,
         foods,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in get all food api",
         error,
      });
   }
};

// get single food item by its id
const getSingleFoodController = async (req, res) => {
   try {
      const foodId = req.params.id;
      if (!foodId) {
         return res.status(404).send({
            success: false,
            message: "Please provide id ",
         });
      }
      // 🔥 Find food + populate
      const food = await foodModel.findById(foodId);

      if (!food) {
         return res.status(404).send({
            success: false,
            message: "Food item not found",
         });
      }

      res.status(200).send({
         success: true,
         food,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error in get single food API",
         error,
      });
   }
};
// get food by restaurant controller
const getbyrestaurant = async (req, res) => {
   try {
      const restaurantid = req.params.id;
      if (!restaurantid) {
         return res.status(404).send({
            success: false,
            message: "Please provide id ",
         });
      }
      // 🔥 Find food + populate
      const food = await foodModel.find({ restaurant: restaurantid });

      if (!food) {
         return res.status(404).send({
            success: false,
            message: "Food item not found",
         });
      }

      res.status(200).send({
         success: true,
         message: "food based on restaurant",
         food,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "Error in get single food API",
         error,
      });
   }
};

// update food controller
const updateFoodController = async (req, res) => {
   try {
      const foodId = req.params.id;

      let updateData = { ...req.body };

      // 🔥 FIX CATEGORY
      if (updateData.category) {
         let categoryData = await categoryModel.findOne({
            title: { $regex: `^${updateData.category}$`, $options: "i" },
         });

         if (!categoryData) {
            categoryData = await categoryModel.create({
               title: updateData.category,
            });
         }

         updateData.category = categoryData._id;
      }

      const updatedfood = await foodModel.findByIdAndUpdate(
         foodId,
         { $set: updateData },
         { new: true },
      );

      res.status(200).send({
         success: true,
         message: "Food updated successfully",
         updatedfood,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in update food api",
         error,
      });
   }
};

const deleteFoodController = async (req, res) => {
   try {
      const foodid = req.params.id;
      if (!foodid) {
         return res.status(404).send({
            success: false,
            message: "please provide food id",
         });
      }
      const food = await foodModel.findById(foodid);

      if (!food) {
         res.status(404).send({
            success: false,
            message: "No food found",
         });
      }
      await foodModel.findByIdAndDelete(foodid);

      res.status(200).send({
         success: true,
         message: "Food deleted successfully",
      });
   } 
   catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in update food api",
         error,
      });
   }
};
export {
   getbyrestaurant,
   createFoodController,
   updateFoodController,
   deleteFoodController,
   getSingleFoodController,
   getallfoodController,
};
