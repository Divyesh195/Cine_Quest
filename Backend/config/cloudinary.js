import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async ()=>{

    cloudinary.config({
        cloud_name : process.env.CLOUDINARY_NAME,
        api_key :  process.env.CLOUDINARY_API_KEY,
        api_secret :  process.env.CLOUDINARY_API_SECRET_KEY,
        
        // cloud_name :"dhunajugu",
        // api_key :  "323861325451713",
        // api_secret_key :  "y8hg9CuZb_LOcx5si3iTsKj-8Ho",
    })
}

export default connectCloudinary;