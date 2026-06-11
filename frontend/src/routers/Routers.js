import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
// import Cars from "./../pages/Cars";
import CarListing from "../components/Featured-cars/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "./../pages/Blog";
import BlogDetails from "./../pages/BlogDetails";
import NotFound from "./../pages/NotFound";
import Contact from "./../pages/Contact";
import Login from "./../pages/Login";
import Register from "./../pages/Register";
import SearchResultList from "./../pages/SearchResultList";
import BookingForm from "../components/Booking/BookingForm";
import Cars from "././../pages/Cars";
import ThankYou from "../pages/ThankYou";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/cars/search" element={<SearchResultList />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="*" element={<NotFound />} />
      <Route path="/bookingform" element={<BookingForm/>}/>
    </Routes>
  );
};

export default Routers;
