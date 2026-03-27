import mongoose from "mongoose";

// function to connect database connection

const connectdb = async() =>{
   try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log(`database connected : ${mongoose.connection.host}`)

   } catch (error) {
      console.log("db error : " , error )
   }
}

export default connectdb