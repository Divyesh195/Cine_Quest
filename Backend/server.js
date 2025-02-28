import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import movieRouter from './routes/movieRoute.js';
import customerRouter from './routes/customerRoute.js';

//App configuration 
const app = express();
const port = process.env.PORT || 4000
connectDB();
connectCloudinary();

//Middlewares 
app.use(express.json())
app.use(cors())

//API endpoints
app.use('/api/admin',adminRouter)
app.use('/api/movie',movieRouter)
app.use('/api/customer',customerRouter)


//Endpoints
app.get('/',(req,res)=>{
    res.send("Express application is working.");
})

app.listen(port,()=>{
    console.log(`App is running on ${port} port`)
});