import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
   title: {
      type: String,
      required: [true, "food title is required"]
   },
   description: {
      type: String,
      required: [true, "description is required"]
   },
   price: {
      type: Number,
      required: [true, "food price is required"]
   },
   foodTags: [String], // ✅ fixed
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
   },
   code: {
      type: String
   },
   isAvailable: {
      type: Boolean,
      default: true
   },
   imageUrl: {
      type: String
   },
   restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RestaurantModel"
   },
   rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5
   },
   ratingCount: {
      type: Number,
      default: 0
   }
}, { timestamps: true });

const Food = mongoose.model("Food", foodSchema);

export default Food;