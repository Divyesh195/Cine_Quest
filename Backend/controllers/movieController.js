import movieModel from "../models/movieModel.js"

//API for changing the availability
const changeAvailability = async (req,res) => {
    try {

        const {movId} = req.body 

        const movieData = await movieModel.findById(movId)

        console.log(movieData);

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


export  {changeAvailability , getMovies}