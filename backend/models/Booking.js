import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
    },
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: [true, "Car ID is required"],
    },
    startDate: {
      type: Date,
      required: [true, "Please provide start date"],
    },
    endDate: {
      type: Date,
      required: [true, "Please provide end date"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Total price is required"],
    },
    pickupLocation: {
      type: String,
      required: [true, "Please provide pickup location"],
    },
    dropoffLocation: {
      type: String,
      required: [true, "Please provide dropoff location"],
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
