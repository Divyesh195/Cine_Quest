import bcrypt from 'bcrypt'
import customerModel from '../models/customerModel'
import { Jwt } from 'jsonwebtoken'
//API for customer Login

const registerCustomer = async(req,res)=>{
    try {
        const{name, mobile, password } = req.body 

        if(!name || !mobile || !password){
            return res.json({success:false , message : "Fill the missing details"})
        }

        if(password.length < 8){
            return res.json({success:false , message: "Password lenght must be 8 or greater"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const customerData={
            name,
            mobile,
            password:hashedPassword
        }

        const newCustomer = new customerModel(customerData)

        const customer = await newCustomer.save()

        const token = Jwt.sign({id:customer._id}, process.env,JWT_SECRET)

        res.json({success:true, token})


    } catch (error) {
        console.log(error);
        res.json({success:true, message:error.message})
    }
};

export default registerCustomer