import express from "express";
import {
  createBooking,
  getUserBookings,
  getSingleBooking,
  getAllBookings,
  updateBookingStatus,
  cancelBooking,
} from "../controllers/bookingController.js";
import { verifyAuth, verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/", verifyAuth, createBooking);
router.get("/user/my-bookings", verifyAuth, getUserBookings);
router.get("/admin/all-bookings", verifyAuth, verifyAdmin, getAllBookings);
router.get("/:id", verifyAuth, getSingleBooking);
router.put("/admin/status/:id", verifyAuth, verifyAdmin, updateBookingStatus);
router.put("/cancel/:id", verifyAuth, cancelBooking);

export default router;
