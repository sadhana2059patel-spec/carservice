import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  // id: {
  //   type: Number,
  //   required: true,
  //   unique: true,
  // },
  brand: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pickUpDate: {
    type: Date,
    required: true,
},
dropOffDate: {
    type: Date,
    required: true,
},
  rating: {
    type: Number,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
  model:{
    type: String,
    required:true,
  },
  price:{
    type: Number,
    required:true, 
  },
  speed: {
    type: String,
    required: true,
  },
  gps: {
    type: String,
    default: false,
  },
  seatType: {
    type: String,
    required: true,
  },
  automatic: {
    type: String,
    default: false,
  },
  
  carQuantity:{
    type: Number,
    default: true,
  },
  availability:{
    type: Boolean,
    default:true,
  },
 
  
  featured:{
    type: Boolean,
    default:false,
  },
  
  description: {
    type: String,
    required: false,
  },
},
{timestamps:true}
);

export default mongoose.model("Car", carSchema);


