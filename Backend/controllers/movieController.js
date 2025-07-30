import movieModel from "../models/movieModel.js"
import bcrypt from 'bcrypt'
import  Jwt  from "jsonwebtoken"
import bookingModel from "../models/bookingModel.js"

//API for changing the availability
const changeAvailability = async (req,res) => {
    try {

        const {movId} = req.body 

        const movieData = await movieModel.findById(movId)

        // console.log(movieData);

        await movieModel.findByIdAndUpdate(movId, {availability : !movieData.availability})

        res.json({success:true,message:"Availability Changed"})

        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Failed to change availability"})
    }
}

//API to fetch moviesData in frontend
const getMovies = async(req,res)=>{
    try {
        const movies = await movieModel.find({}).select(['-password','-email'])
        res.json({success:true, movies})
        
    } catch (error) {
        res.json({success:false, message:"Can't fetch from movieController"})
    }

}

//API for distributor login 
const distributorLogin = async(req,res) =>{
    try {
        const {email, password} = req.body 

        const distributor = await movieModel.findOne({email})

        if(!distributor){
            return res.json({success:false, message : "Not found"})
        }else{
            const isMatch = await bcrypt.compare(password , distributor.password)

            if(isMatch){
                const token = Jwt.sign({id:distributor._id} , process.env.JWT_SECRET)
                res.json({success:true,token})
            }else{
                return res.json({success:false, message : "Invalid credentials"})
            }
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error occured in login API"})
    }
}

//API to fetch all bookings for movie
const getMovieBookings = async(req,res)=>{
    try {

        const {distributorID} = req.body 

        console.log("Distributor Id",distributorID);

        // const bookings = await bookingModel.find({distributorID})
        const bookings = await bookingModel.find({movieID : distributorID})

        // console.log('Bookings',bookings);

        res.json({success:true , bookings})

        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error occured in bookings API"})
    }
}

//API for distributor to cancel the booking
const cancelBooking = async(req,res)=>{
    try {

        const {distributorID, x} = req.body

        const bookingData = await bookingModel.findById(x)
        
        if(bookingData && bookingData.movieID == distributorID){
            await bookingModel.findByIdAndDelete(x)
            return res.json({success:true, message:"Booking cancelled"})
        }else{
            return res.json({success:false, message:"Error in loading data"})
        }
        
    } catch (error) {
        console.log(error);
    }
}

//API to get dashboard data of distributor
const distributorDashboard = async(req,res)=>{
    try {

        const {distributorID} = req.body

        // console.log('Distributor ID',distributorID);

        const bookings = await bookingModel.find({movieID : distributorID})

        // console.log('Bookings',bookings);

        let earning = 0;

        bookings.map((item)=>{
            if(item.payment){
                earning += item.amount
            }
        })

        let viewers = []

        bookings.map((item)=>{
            if(!viewers.includes(item.customerID)){
                viewers.push(item.customerID)
            }
        })

        let dashData = {
            earning,
            totalBooking : bookings.length,
            viewers : viewers.length,
            latestBookings : bookings.slice(0,3).reverse(),
        }

        res.json({success:true, dashData});

    } catch (error) {
        console.log(error);
    }
}

const getMovieProfile = async(req,res)=>{
    try {
        const {distributorID} = req.body
        const movieData = await movieModel.findById(distributorID)
        // console.log('MovieData',movieData);
        res.json({success:true, movieData})
        
    } catch (error) {
        console.log('Controller error');
        console.log(error);
    }
}


export  {changeAvailability , getMovies, distributorLogin, getMovieBookings, cancelBooking, distributorDashboard, getMovieProfile}