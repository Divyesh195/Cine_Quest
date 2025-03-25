import Jwt  from "jsonwebtoken"

//Admin authentication middleware
const authCustomer = async(req,res,next)=>{
    try {

        const Token = req.get('token')
        // console.log("This is the token",token);

        if(!Token){
            return res.json({success:false, message:"No token available"})
        }

        const decoded_token = Jwt.verify(Token, process.env.JWT_SECRET)

        req.body.customerID = decoded_token.id
        // console.log("This is decoded token",decoded_token)

        console.log('Customer auth successfull');

        next()
        
    } catch (error) {
        console.log(error);
        console.log("Catch block");
        res.json({success:false,message:error.message})
    }
}

export default authCustomer