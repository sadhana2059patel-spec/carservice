import express from "express";
import {
  getAllCars,
  getSingleCar,
  createCar,
  updateCar,
  deleteCar,
} from "../controllers/carController.js";
import { verifyAuth, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", getSingleCar);
router.post("/", verifyAuth, verifyAdmin, createCar);
router.put("/:id", verifyAuth, verifyAdmin, updateCar);
router.delete("/:id", verifyAuth, verifyAdmin, deleteCar);

export default router;
