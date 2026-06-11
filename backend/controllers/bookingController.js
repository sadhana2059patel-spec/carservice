import Booking from "../models/Booking.js";
import Car from "../models/Car.js";

// Create booking
export const createBooking = async (req, res) => {
  try {
    const {
      carId,
      startDate,
      endDate,
      pickupLocation,
      dropoffLocation,
      notes,
    } = req.body;

    if (!carId || !startDate || !endDate || !pickupLocation || !dropoffLocation) {
      return res.status(400).json({ message: "❌ Please fill in all required fields" });
    }

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: "❌ Car not found" });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

    if (days <= 0) {
      return res.status(400).json({ message: "❌ End date must be after start date" });
    }

    const totalPrice = days * car.pricePerDay;

    const newBooking = await Booking.create({
      userId: req.user.id,
      carId,
      startDate,
      endDate,
      totalPrice,
      pickupLocation,
      dropoffLocation,
      notes,
    });

    res.status(201).json({
      message: "✅ Booking created successfully",
      data: newBooking,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Get user bookings
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id })
      .populate("carId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "✅ Bookings fetched successfully",
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Get single booking
export const getSingleBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("carId").populate("userId");

    if (!booking) {
      return res.status(404).json({ message: "❌ Booking not found" });
    }

    res.status(200).json({
      message: "✅ Booking fetched successfully",
      data: booking,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Get all bookings (Admin only)
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("carId")
      .populate("userId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "✅ Bookings fetched successfully",
      count: bookings.length,
      data: bookings,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Update booking status (Admin only)
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!["pending", "confirmed", "cancelled", "completed"].includes(status)) {
      return res.status(400).json({ message: "❌ Invalid status" });
    }

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "❌ Booking not found" });
    }

    res.status(200).json({
      message: "✅ Booking status updated successfully",
      data: booking,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Cancel booking
export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "❌ Booking not found" });
    }

    if (booking.userId.toString() !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ message: "⛔ You are not authorized to cancel this booking" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.status(200).json({
      message: "✅ Booking cancelled successfully",
      data: booking,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};
