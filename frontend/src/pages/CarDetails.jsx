import React, { useState, useEffect, useContext, useRef } from "react";
import carData from "../assets/data/cars";
import { Container, Row, Col,form,ListGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/Booking/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import { AuthContext } from "../context/AuthContext";

const CarDetails = () => {

  const { id } = useParams();
  const {user} = useContext(AuthContext)


 // fetch data from db
  const {data: car, loading, error} = useFetch(`${BASE_URL}/cars/${id}`);

  // const singleCarItem = carData.find((item) => item.carName === id);

  const  { brand, city, 
    pickUpDate, dropOffDate, 
    rating, carName, imgUrl,
    model, price,  speed, gps, 
    seatType, automatic, carQuantity,
    availability, featured,  description}
   = car ;

  
  // format date
const options = { day: "numeric", month: "long", year: "numeric"};

//submit request to the srver
  const submitHandler = e => {
    e.preventDefault();

    // if(!user || user === undefined || user === null){
    //   alert("please sign in")
    // }
  }
  
  useEffect(()=>{
    window.scrollTo(0,0)
  },[car])
  return (
    <Helmet title={carName}>
      {<section>
        <Container> 
          {
            loading && <h4 className="text-center pt-5">Loading....</h4>
          }
          {
            error && <h4 className="text-center pt-5">{error}</h4>
          }
          {
            !loading && !error  &&  (<Row>
            <Col lg="6">
              <img src={imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm car={car}/>
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row> )
          }
        </Container>
      </section>}
      
    </Helmet>
  );
};

export default CarDetails;
