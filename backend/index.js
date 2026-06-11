import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import carRoute from './routes/cars.js';
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import bookingRoute from "./routes/bookings.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin:true,
    credentials:true
}


//databas connection
mongoose.set("strictQuery", false);
const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });

        console.log('Mongo database connectd');

    } catch (err) {
        console.log('Mongo database connection failed');
    }
};

app.get("/", (req,res) => {
    res.send("apu is working")
})

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/cars", carRoute)
app.use("/api/v1/users", userRoute);
app.use("/api/v1/booking", bookingRoute)
// app.use("/api/v1/booking",bookingRoute);


app.listen(port, () => {
    connect();
    console.log("server listening on port" , port);
});