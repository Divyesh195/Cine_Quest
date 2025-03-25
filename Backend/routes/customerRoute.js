import express from 'express'
import { registerCustomer, customerLogin, getCustomerData, updateCustomerData, bookMovie, getBookingsData, cancelBooking, paymentRazorpay, varifyRazorPay } from '../controllers/customerController.js'
import authCustomer from '../middleware/authCustomer.js'
import upload from '../middleware/multer.js'

const customerRouter = express.Router()

customerRouter.post('/register-customer',registerCustomer)
customerRouter.post('/customer-login',customerLogin)
customerRouter.get('/get-customer-data',authCustomer,getCustomerData)
customerRouter.post('/update-profile',upload.single('image'), authCustomer, updateCustomerData)
customerRouter.post('/book-movie',authCustomer, bookMovie)
customerRouter.get('/bookings',authCustomer, getBookingsData)
customerRouter.post('/cancel-booking', authCustomer, cancelBooking)
customerRouter.post('/payment-razorpay',authCustomer,paymentRazorpay)
customerRouter.post('/varify-razorpay',authCustomer, varifyRazorPay)

export default customerRouter