import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
      title: {
         type: String,
         required: [true, "category title is required"]
      },
      imageUrl : {
         type: String,
         
      }
});

const CatModel = mongoose.model('CatModel', categorySchema);
export default CatModel;
