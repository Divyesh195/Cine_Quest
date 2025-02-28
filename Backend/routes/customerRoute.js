import express from 'express'
import { registerCustomer, customerLogin } from '../controllers/customerController.js'

const customerRouter = express.Router()

customerRouter.post('/register-customer',registerCustomer)
customerRouter.post('/customer-login',customerLogin)

export default customerRouter