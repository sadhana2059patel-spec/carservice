import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: [true, "Please provide car name"],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, "Please provide car brand"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Please provide car model"],
      trim: true,
    },
    year: {
      type: Number,
      required: [true, "Please provide manufacturing year"],
    },
    pricePerDay: {
      type: Number,
      required: [true, "Please provide price per day"],
    },
    carImage01: {
      type: String,
      required: [true, "Please provide car image"],
    },
    carImage02: {
      type: String,
    },
    carImage03: {
      type: String,
    },
    carImage04: {
      type: String,
    },
    transmission: {
      type: String,
      enum: ["automatic", "manual"],
      default: "automatic",
    },
    seats: {
      type: Number,
      default: 5,
    },
    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "hybrid", "electric"],
      default: "petrol",
    },
    mileage: {
      type: String,
    },
    description: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    features: [String],
  },
  { timestamps: true }
);

export default mongoose.model("Car", carSchema);
