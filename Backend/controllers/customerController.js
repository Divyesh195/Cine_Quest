import bcrypt from "bcrypt";
import customerModel from "../models/customerModel.js";
import Jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary";
import movieModel from "../models/movieModel.js";
import bookingModel from "../models/bookingModel.js";
import Razorpay from "razorpay";

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

//API to get customer profile data
const getCustomerData = async (req, res) => {
  try {
    const { customerID } = req.body;
    const customerData = await customerModel
      .findById(customerID)
      .select("-password");
    res.json({ success: true, customerData });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

//API to update customer profile data
const updateCustomerData = async (req, res) => {
  try {
    const { customerID, name, mobile, dob, gender, address } = req.body;

    const imgFile = req.file;

    if ((!name, !mobile, !dob, !gender, !address)) {
      res.json({ success: false, message: "missing details" });
    } else {
      await customerModel.findByIdAndUpdate(customerID, {
        name,
        mobile,
        dob,
        gender,
        address: JSON.parse(address),
      });
    }

    if (imgFile) {
      const imgUpload = await cloudinary.uploader.upload(imgFile.path, {
        resource_type: "image",
      });
      const imgUrl = imgUpload.secure_url;

      await customerModel.findByIdAndUpdate(customerID, { img: imgUrl });
    }

    res.json({ success: true, message: "Profile Upated" });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

//API to book movie
const bookMovie = async (req, res) => {
  try {
    const { customerID, movieID, slotDate, slotTime } = req.body;

    const movieData = await movieModel.findById(movieID).select("-password");

    if (!movieData.availability) {
      return res.json({
        success: false,
        message: "Movie is currently unavailable",
      });
    }

    let slots_booked = movieData.slots_booked;

    // if (slots_booked[slotDate]) {
    //   if (slots_booked[slotDate].includes(slotTime)) {
    //     return res.json({ success: false, message: "No slot available" });
    //   } else {
    //     slots_booked[slotDate].push(slotTime);
    //   }
    // } else {
    //   slots_booked[slotDate] = [];
    //   slots_booked[slotDate].push(slotTime);
    // }

    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        slots_booked[slotDate].push(slotTime);
      }
    } else {
      slots_booked[slotDate] = [];
      slots_booked[slotDate].push(slotTime);
    }

    const customerData = await customerModel
      .findById(customerID)
      .select("-password");

    delete movieData.slots_booked;

    const bookingData = {
      customerID,
      movieID,
      customerData,
      movieData,
      amount: movieData.price,
      slotTime,
      slotDate,
      date: Date.now(),
    };

    const newBooking = new bookingModel(bookingData);

    await newBooking.save();

    //Save new slot data in movie

    await movieModel.findByIdAndUpdate(movieID, { slots_booked });

    res.json({ success: true, message: "Booking successfull" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//API to get bookings data for a user
const getBookingsData = async (req, res) => {
  try {
    const { customerID } = req.body;
    const bookings = await bookingModel.find({ customerID });

    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

//API to cancel the booking
const cancelBooking = async (req, res) => {
  try {
    const { customerID, bookingID } = req.body;

    const bData = await bookingModel.findById(bookingID);

    // console.log('Booking Data' , bData);

    // console.log("Customer ID",customerID);

    if (bData.customerID !== customerID) {
      return res.json({ success: false, message: "Unauthorized action.." });
    }

    await bookingModel.findByIdAndDelete(bookingID);

    console.log("Movie ID:", bData.movieID);

    const movData = await movieModel.findById(bData.movieID);

    // console.log("Movie Data:",movData);

    let slots_booked = movData.slots_booked;

    // console.log('Slots : ',slots_booked);

    slots_booked[bData.slotDate] = slots_booked[bData.slotDate].filter(
      (e) => e !== bData.slotTime
    );

    await movieModel.findByIdAndUpdate(bData.movieID, { slots_booked });

    res.json({ success: true, message: "Appointment cancelled" });
  } catch (error) {
    console.log(error);
    res.json({ success: true, message: error.message });
  }
};

//API for making payment using Razorpay
const razorInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_KEY_SECRET
});

const paymentRazorpay = async (req, res) => {
  try {
    const { bookingID } = req.body;

    const bookingData = await bookingModel.findById(bookingID);

    // console.log('Booking Data', bookingData);

    // if (!bookingData) {
    //   return res.json({ success: false, message: "Booking not found" });
    // }

    const options = {
      amount: bookingData.amount * 100,
      currency: process.env.CURRENCY,
      receipt: bookingID,
    };

    const order = await razorInstance.orders.create(options);

    res.json({ success: true, order });
  } 
  catch (error) {
    console.log("Error from catch block in controller",error);
    res.json({ success: false, message: error.message });
  }
};


//API for varification of payment
const varifyRazorPay = async (req,res)=>{
  try {
    const {razorpay_order_id} = req.body
    const order_info = await razorInstance.orders.fetch(razorpay_order_id);

    // console.log(order_info);

    if(order_info.status === 'paid'){
      await bookingModel.findByIdAndUpdate(order_info.receipt , {payment : true})
      res.json({success:true, message : "Payment successfull"})
    }else{
      res.json({success:false, message : "Payment failed"})
    }
  } catch (error) {
    console.log("Error from catch block in controller",error);
    res.json({ success: false, message: error.message });
  }
}
export {
  registerCustomer,
  customerLogin,
  getCustomerData,
  updateCustomerData,
  bookMovie,
  getBookingsData,
  cancelBooking,
  paymentRazorpay,
  varifyRazorPay
};
