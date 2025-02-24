import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    name : {type:String, required:true},
    part : {type:String, required:false},
    email : {type:String,  required:true, unique:true},
    password : {type:String, required:true},
    genre : {type:String, required:true},
    img : {type:String, required:true},
    duration : {type:String, required:true},
    about : {type:String, required:true},
    availability : {type:Boolean, required:false},
    price : {type:Number, required:true},
    date: {type:Number, required:false},
    slots_booked : {type:Object, default:{}},
},{minimize:false})

const movieModel = mongoose.model.movie || mongoose.model('movie',movieSchema);

export default movieModel