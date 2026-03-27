import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
   title:{
      type : String,
      required: [true, "Restaurant title is required"]

   },
   imageUrl :{
      type: String,
   } ,
   foods : {
      type :Array,
   },
   time: {
      type: String,
   },
   pickup : {
      type : Boolean,
      default : true
   },
   delivery : {
      type :Boolean,
      default :  true
   },
   isOpen : {
      type : Boolean,
      default : true
   },
   logoUrl : {
      type :String
   },
   ratingCount : {
      type :String
   },
   rating : {
      type: Number,
      default : 1,
      min : 1,
      max :5 
   },
   code : {
      type : String
   },
   coords : {
      id: {type : String},
      latitude : {type : Number},
      latitudeDelta : {type : Number},
      longitude : {type : Number},
      longitudeDelta : {type : Number},
      address : {type :String},
      title : {type :String}
   }
}, {timestamps: true});

const RestaurantModel = mongoose.model('RestaurantModel', restaurantSchema);
export default RestaurantModel;
