import validator from "validator"
import bcrypt from "bcrypt"
import { v2 as cloudinary } from 'cloudinary'
import movieModel from "../models/movieModel.js"
import  Jwt  from "jsonwebtoken"


//API for admin login
const loginAdmin = async (req,res)=>{
    try {

        const {email, password} = req.body;
        // console.log(email);

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const tocken = Jwt.sign((email+password).toString(), process.env.JWT_SECRET)
            res.json({success:true, tocken})
        }
        else{
            res.json({success:false, message:"Invalid credential"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//API for adding a movie
const addMovie =async(req,res) =>{
    try {
        const{name, email, password, part, genre, duration, about, availability, price}=req.body
        const imgFile = req.file

        if(!name || !email || !password || !genre || !duration || !about || !price){
            return req.json({success:false, message:"Missing details"})
        }

        //Validation of email
        if(!validator.isEmail(email)){
            return req.json({success:false, message:"Please enter a valid email."})
        }
        //Validation of password
        if(password.lenght < 8){
            return req.json({success:false, message:"Please enter a strong password"})
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Uploading image to  cloudinary
        const imgUpload = await cloudinary.uploader.upload(imgFile.path,{resource_type:"image"})
        const imgUrl = imgUpload.secure_url

        const movieData={
            name,
            part,
            email,
            password:hashedPassword,
            genre,
            img:imgUrl,
            duration,
            about,
            price,
            date:Date.now()
        }

        const newMovie = new movieModel(movieData)

        res.json({success:true,message:"Movie added successfully"})

        await newMovie.save();

        console.log({name, email, password, part, genre, duration, about, availability, price},imgFile);

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}



export {addMovie, loginAdmin}