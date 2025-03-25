import express from 'express'
import { addMovie, adminDashboard, allMovies, bookingsAdmin, cancelBookingAdmin, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js';
import { changeAvailability } from '../controllers/movieController.js';

const adminRouter = express.Router();

adminRouter.post('/add-movie',authAdmin ,upload.single('image') , addMovie);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-movies',authAdmin, allMovies)
adminRouter.post('/change-av',authAdmin, changeAvailability)
adminRouter.get('/bookings', authAdmin, bookingsAdmin)
adminRouter.post('/cancel-booking', authAdmin, cancelBookingAdmin)
adminRouter.get('/dashboard' , authAdmin, adminDashboard)


export default adminRouter