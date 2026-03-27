import express from "express";
import cors from 'cors'
import morgan from "morgan";
import 'dotenv/config';
import connectdb from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import foodRoutes from './routes/foodRoutes.js';

// rest object
const app = express()

await connectdb();

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))



// route

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/restaurant', restaurantRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/food', foodRoutes)

app.get('/' , (req, res) => {
   res.status(200).send("welcome to online restaurant backend");
})

const PORT = process.env.PORT || PORT

app.listen(PORT, () => {
   console.log("server running")
});