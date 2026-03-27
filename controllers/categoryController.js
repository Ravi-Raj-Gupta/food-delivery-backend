// create Cat

import CatModel from "../models/categoryModel.js";

const createCatController = async (req, res) => {
   try {
      const { title, imageUrl } = req.body;

      if (!title) {
         return res.status(404).send({
            success: false,
            message: "title and imageUrl not found",
         });
      }
      const newcategory = new CatModel({ title, imageUrl });
      await newcategory.save();

      res.status(200).send({
         success: true,
         message: "new category created",
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in create category api",
         error,
      });
   }
};

const getallCatController = async (req, res) => {
   try {
      const categories = await CatModel.find({});

      if (!categories) {
         return res.status(404).send({
            success: false,
            message: "no categories found",
         });
      }
      res.status(200).send({
         success: true,
         totalCat: categories.length,
         categories,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in get all category api",
         error,
      });
   }
};

const udpateCatController = async (req, res) => {
   try {
      const id = req.params.id;
      const { title, imageUrl } = req.body;

      const updateCategory = await CatModel.findByIdAndUpdate(
         id,
         { title, imageUrl },
         { new: true },
      );

      if (updateCategory) {
         return res.status(500).send({
            success: false,
            message: "No category found",
         });
      }

      res.status(200).send({
         success: true,
         message: "Category Updated Successfully",
      });

   } 
   catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in update category api",
         error,
      });
   }
};


// delete cat
const deleteCatController = async(req, res) => {
   try {
      const {id} = req.params;
      if(!id){
         return res.status(404).send({
            success : false,
            message : "Please Provide category Id"
         })
      }
      const category = await CatModel.findById(id)

      if(!category) {
         return res.status(500).send({
            success :false,
            message :"No category found with this api"
         })
      }
      await CatModel.findByIdAndDelete(id);
      res.status(200).send({
         success :true,
         message :"Category deleted successfully"
      })

   }
   catch (error) {
      console.log(error)
      res.status(500).send({
         success : false,
         message : "error in delete cat api",
         error
      })
   }
}

export { udpateCatController, deleteCatController, createCatController, getallCatController };
