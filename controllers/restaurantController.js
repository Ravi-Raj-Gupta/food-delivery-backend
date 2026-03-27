// create restaurant controller

import RestaurantModel from "../models/restaurantModel.js";

const restaurantController = async (req, res) => {
   try {
      const {
         title,
         imageUrl,
         time,
         foods,
         delivery,
         isOpen,
         address,
         logoUrl,
         rating,
         ratingCount,
         code,
         coords,
      } = req.body;

      if (!title || !coords?.address) {
         return res.status(404).send({
            success: false,
            message: "please provide  title and address",
         });
      }

      const newRestaurant = new RestaurantModel({
         title,
         imageUrl,
         time,
         foods,
         delivery,
         isOpen,
         logoUrl,
         rating,
         ratingCount,
         code,
         coords,
      });

      await newRestaurant.save();
      res.status(200).send({
         success: true,
         message: "New Restaurant Created",
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in create restaurant api",
         error,
      });
   }
};

// get all restaurant controller

const getallRestaurantController = async (req, res) => {
   try {
      const restaurants = await RestaurantModel.find();

      if (!restaurants) {
         return res.status(404).send({
            success: false,
            message: "No restaurant available",
         });
      }
      res.status(200).send({
         success: true,
         totalCount: restaurants.length,
         restaurants,
      });
   } catch (error) {
      console.log(error);
      res.send({
         success: false,
         message: "error in get all restaurant api",
      });
   }
};

// get restaurant by id

const getRestaurantControllerbyId = async (req, res) => {
   try {
      const restaurantid = req.params.id;
      if (!restaurantid) {
         res.send({
            success: false,
            message: "Please provide restaurant id",
         });
      }

      const restaurant = await RestaurantModel.findById(restaurantid);

      if (!restaurant) {
         return res.status(404).send({
            success: false,
            message: "No restaurant of this id is found",
         });
      }
      res.status(200).send({
         success: true,
         restaurant,
      });
   } 
   
   catch (error) {
      console.log(error);
      res.send({
         success: false,
         message: "error in get restaurant by id api ",
         error,
      });
   }
};

const deleteRestaurantController = async(req, res) => {
   try {
      
      const restaurantId = req.params.id
      if(!restaurantId){
         return res.status(404).send({
            success: false,
            message: "No restaurant found or provide restaurant id"
         })
      }
      const deleteRestaurantController = async(req, res) => {
   try {
      
      const restaurantId = req.params.id
      if(!restaurantId){
         return res.status(404).send({
            success: false,
            message: "No restaurant found or provide restaurant id"
         })
      }
      await RestaurantModel.findByIdAndDelete(restaurantId)
      res.status(200).send({
         success: true,
         message: "restaurant deleted successfully"
      })
   } catch (error) {
      console.log(error)
      res.status(500).send({
         success : false,
         message: "error in delete api",
         error
      })
   }
}

      await RestaurantModel.findByIdAndDelete(restaurantId)
      res.status(200).send({
         success: true,
         message: "restaurant deleted successfully"
      })
   } catch (error) {
      console.log(error)
      res.status(500).send({
         success : false,
         message: "error in delete api",
         error
      })
   }
}


export {
   restaurantController,
   getallRestaurantController,
   getRestaurantControllerbyId,deleteRestaurantController
};
