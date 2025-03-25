import express from "express";
import { cancelBooking, distributorDashboard, distributorLogin, getMovieBookings, getMovieProfile, getMovies } from "../controllers/movieController.js";
import authDistributor from "../middleware/authDistributor.js";

const movieRouter = express();

movieRouter.use = express.Router();

movieRouter.get('/list', getMovies);
movieRouter.post('/login', distributorLogin)
movieRouter.get('/bookings', authDistributor, getMovieBookings)
movieRouter.post('/cancel-booking', authDistributor, cancelBooking)
movieRouter.get('/distributor-dashboard', authDistributor, distributorDashboard)
movieRouter.get('/get-profile', authDistributor, getMovieProfile)

export default movieRouter