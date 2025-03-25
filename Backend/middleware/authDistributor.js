import Jwt  from "jsonwebtoken"

//Distributor authentication middleware
const authDistributor = async(req,res,next)=>{
    try {

        const Token = req.get('dToken')
        // console.log("This is the token",token);

        if(!Token){
            return res.json({success:false, message:"No token available"})
        }

        const decoded_token = Jwt.verify(Token, process.env.JWT_SECRET)

        req.body.distributorID = decoded_token.id
        // console.log("This is decoded token",decoded_token)

        console.log('Distributor authentication successfull');

        next()
        
    } catch (error) {
        console.log(error);
        console.log("Catch block");
        res.json({success:false,message:error.message})
    }
}

export default authDistributor