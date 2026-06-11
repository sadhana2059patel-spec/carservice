import express from 'express';
import { 
    createCar,
    deleteCar,
    getSingleCar,
    updateCar,
    getAllCar,
    getCarBySearch,
    getCarCount,
    getFeaturedCar,
} from "./../controllers/carControllers.js";
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new car
router.post("/", verifyAdmin, createCar);

//update car 
router.put("/:id", verifyAdmin, updateCar);

//delete car
router.delete("/:id", verifyAdmin, deleteCar);

//get Single car
router.get("/:id", getSingleCar);

//get All cars
router.get("/", getAllCar);

//get car by search
router.get("/search/getCarBySearch", getCarBySearch);

router.get("/search/getFeaturedCars", getFeaturedCar)
//
router.get("/search/getCarCount", getCarCount);



export default router;