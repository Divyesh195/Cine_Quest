import express from 'express'
import { addMovie, loginAdmin } from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js';

const adminRouter = express.Router();

adminRouter.post('/add-movie',authAdmin ,upload.single('image') , addMovie);
adminRouter.post('/login', loginAdmin);

export default adminRouter