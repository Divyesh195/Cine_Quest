import express from "express";
import { getMovies } from "../controllers/movieController.js";

const movieRouter = express();

movieRouter.use = express.Router();

movieRouter.get('/list', getMovies);

export default movieRouter