import Car from "../models/Car.js";

// Get all cars
export const getAllCars = async (req, res) => {
  try {
    const { brand, model, priceMin, priceMax, fuelType } = req.query;

    let filter = {};
    if (brand) filter.brand = brand;
    if (model) filter.model = model;
    if (fuelType) filter.fuelType = fuelType;
    if (priceMin || priceMax) {
      filter.pricePerDay = {};
      if (priceMin) filter.pricePerDay.$gte = Number(priceMin);
      if (priceMax) filter.pricePerDay.$lte = Number(priceMax);
    }

    const cars = await Car.find(filter);
    res.status(200).json({
      message: "✅ Cars fetched successfully",
      count: cars.length,
      data: cars,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Get single car
export const getSingleCar = async (req, res) => {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);

    if (!car) {
      return res.status(404).json({ message: "❌ Car not found" });
    }

    res.status(200).json({
      message: "✅ Car fetched successfully",
      data: car,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Create car (Admin only)
export const createCar = async (req, res) => {
  try {
    const {
      carName,
      brand,
      model,
      year,
      pricePerDay,
      carImage01,
      transmission,
      seats,
      fuelType,
      mileage,
      description,
      features,
    } = req.body;

    if (!carName || !brand || !model || !year || !pricePerDay || !carImage01) {
      return res.status(400).json({ message: "❌ Please fill in all required fields" });
    }

    const newCar = await Car.create({
      carName,
      brand,
      model,
      year,
      pricePerDay,
      carImage01,
      transmission,
      seats,
      fuelType,
      mileage,
      description,
      features: features || [],
    });

    res.status(201).json({
      message: "✅ Car created successfully",
      data: newCar,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Update car (Admin only)
export const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const car = await Car.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!car) {
      return res.status(404).json({ message: "❌ Car not found" });
    }

    res.status(200).json({
      message: "✅ Car updated successfully",
      data: car,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};

// Delete car (Admin only)
export const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      return res.status(404).json({ message: "❌ Car not found" });
    }

    res.status(200).json({
      message: "✅ Car deleted successfully",
      data: car,
    });
  } catch (err) {
    res.status(500).json({ message: "❌ Server error: " + err.message });
  }
};
