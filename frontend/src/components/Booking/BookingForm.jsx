import React, {useState, useTransition, setCredentials, useContext} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {BASE_URL} from "../../utils/config";

const BookingForm = ({car}) => {
  const {price, brand} = car;

  const navigate = useNavigate()

  const {user} = useContext(AuthContext)

  const [booking, setBooking] = useState({
    userId: user && user._id,
    userEmail: user && user.email,
    carName: brand,
    fullName:'',
    phone:'',
    carQuantity:'1',
    pickUpDate:'',
    dropOffDate:'',
  });

  const handleChange = e => {
    setBooking(prev => ({...prev, [e.target.id]: e.target.value }));

  };

  let totalAmount = 0;
  const discount = 0.2;
  if (booking.carQuantity > 1) {
    totalAmount = Number(price) * Number(booking.carQuantity) - Number(price) * discount;
  } else {
    totalAmount = Number(price) * Number(booking.carQuantity);
  }
  

  const handleClick = async e =>{
    e.preventDefault();

    try {
      if (!user || user === undefined || user=== null) {
        return alert('Please sign in')
      }

      const res = await fetch(`${BASE_URL}/booking`, {
        method: "post",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(booking),
      });

      const result = await res.json();

      if (!res.ok) {
        return alert(result.message);
      }
      navigate('/thank-you');
    } catch (err) {
      alert(err.message);
    }

    
  };
  
  return (  
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per car</span></h3>
      </div>

      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form" onSubmit={handleClick}>
          <FormGroup>
            <input 
            type="text" 
            placeholder="Full Name" 
            id="fulltName"
            required 
            onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input type="number" 
            placeholder="phone" 
            id="phone"
            required 
            onChange={handleChange}/>
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input type="date" 
            placeholder="" 
            id="pickUpDate"
            required 
            onChange={handleChange}
            />
            <input type="date" 
            placeholder="" 
            id="dropOffDate"
            required 
            onChange={handleChange}
            />
            <input type="number" 
            placeholder="Quantity" 
            id="carQuantity"
            required 
            onChange={handleChange}/>
          </FormGroup>

        </Form>
      </div>

      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> per 1 car 
              </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Discount</h5>
            <span>20%</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>

        <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Book Now</Button>

      </div>
    </div>
  );
};

export default BookingForm;