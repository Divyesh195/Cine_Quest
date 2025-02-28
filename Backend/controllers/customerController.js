import bcrypt from "bcrypt";
import customerModel from "../models/customerModel.js";
import Jwt from "jsonwebtoken";

//API for customer registration
const registerCustomer = async (req, res) => {
  try {
    const { name, mobile, password } = req.body;

    if (!name || !mobile || !password) {
      console.log(req.body);
      return res.json({ success: false, message: "Fill the missing details" });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password lenght must be 8 or greater",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const customerData = {
      name,
      mobile,
      password: hashedPassword,
    };

    const newCustomer = new customerModel(customerData);

    const customer = await newCustomer.save();

    const token = Jwt.sign({ id: customer._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

//API for customer login
const customerLogin = async (req, res) => {
  const { mobile, password } = req.body;

  const customer = await customerModel.findOne({ mobile: mobile });

  if (!customer) {
    return res.json({ success: false, message: "User not found" });
  } else {
    // console.log(customer);
    const isMatch = await bcrypt.compare(password, customer.password);

    if (isMatch) {
      const token = Jwt.sign({ id: customer._id }, process.env.JWT_SECRET);
      res.json({ success: true, message: "Login successfull", token });
    } else {
      res.json({ success: false, message: "Invalid password" });
    }
  }
};

export { registerCustomer, customerLogin };
