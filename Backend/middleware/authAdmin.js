import Jwt  from "jsonwebtoken"

//Admin authentication middleware
const authAdmin = async(req,res,next)=>{
    try {

        const aToken = req.get('aToken')
        console.log("This is the token",aToken);

        if(!aToken){
            return res.json({success:false, message:"No token available"})
        }

        const decoded_token = Jwt.verify(aToken, process.env.JWT_SECRET)

        if(decoded_token !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false, message:"Not authorized"})
        }

        next()
        
    } catch (error) {
        console.log(error);
        console.log("Catch block");
        res.json({success:false,message:error.message})
    }
}

export default authAdmin