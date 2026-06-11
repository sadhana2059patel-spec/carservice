import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        userEmail: {
            type: String,

        },
        carName:{
            type: String,
            // required:true,
        },
        fullName: {
            type: String,
            // required: true,
        },
        phone: {
            type: Number,
            // required: true,
        },
        pickUpDate: {
            type: Date,
            // required: true,
        },
        dropOffDate: {
            type: Date,
            // required: true,
        },
        carQuantity:{
            type: Number,
            // required: true,
        },


    },
    { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);