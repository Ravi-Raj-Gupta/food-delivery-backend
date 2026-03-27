import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   username : {
      type: String,
      required : [true, 'username is required']
   },
   email : {
      type: String,
      required : [true, 'email is required']
   },
   password: {
      type: String,
      required : [true, 'password is required']
   },
   address : {
      type: Array,
   },
   phone :{
      type: String,
      required: true
   },
   usertype : {
      type: String,
      required: true,
      default : 'client',
      enum : ['client','driver','vendor']

   },
   profile : {
      type: String,
   },
   answer: {
      type: String,
      required: [true,"answer is required"]
   },
}, {timestamps: true})

const User = mongoose.model('User', userSchema);
export default User;