import Car from '../models/Car.js'


// create new car
export const createCar = async (req, res) => {
    const newCar = new Car(req.body);

    try {
        const savedCar = await newCar.save();

        res
            .status(200)
            .json({
                success: true,
                message: "Successfully careated",
                data: savedCar,
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false, message: "Failed to create. Try again " });
    }
};

//update car
export const updateCar = async (req, res) => {

    const id = req.params.id;

    try {
        const updatedCar = await Car.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Successfully updated",
            data: updatedCar,
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to update",

        });
    }
};

//delete car
export const deleteCar = async (req, res) => {
    const id = req.params.id;

    try {
        await Car.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully deleted",

        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: "failed to delete",

        });
    }
};
//getSingle car
export const getSingleCar = async (req, res) => {
    const id = req.params.id;

    try {
        const car = await Car.findById(id);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: car,
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",

        });
    }
};
//getAll car
export const getAllCar = async (req, res) => {

    //for pagination 
    const page = parseInt(req.query.page);

    try {

        const cars = await Car.find({})
            .skip(page * 8)
            .limit(8);

        res.status(200).json({
            success: true, count: cars.length,
            message: "Successful",
            data: cars,
        })

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",

        });
    }
};

// get car by search
export const getCarBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, 'i');
    const pickUpDate = new Date(req.query.pickUpDate);
    const dropOffDate = new Date(req.query.dropOffDate);


    if (isNaN(pickUpDate.getTime())) {
        return res.status(400).json({ success: false, message: "Invalid pickUpDate" });
    }

    if (isNaN(dropOffDate.getTime())) {
        return res.status(400).json({ success: false, message: "Invalid dropOffDate" });
    }

    try {
  const cars = await Car.find({
    location: city,
    pickup_date: { $gte: pickUpDate },
    dropoff_date: { $lte: dropOffDate },
  });

  res.status(200).json({
    success: true,
    message: "Successful",
    data: cars,
  })

} catch (err) {
  res.status(404).json({
    success: false,
    message: "not found",
  });
}
}


// get car counts
export const getCarCount = async (req, res) => {
    try {
        const carCount = await Car.estimatedDocumentCount()

        res.status(200).json({ success: true, data: carCount })
    }
    catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch" })
    }
}

//get featured car
export const getFeaturedCar = async (req, res) => {

    try {

        const cars = await Car.find({ featured: true }).limit(8);

        res.status(200).json({
            success: true,
            message: "Successful",
            data: cars,
        })

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",

        });
    }
};
