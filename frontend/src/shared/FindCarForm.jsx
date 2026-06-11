import React, { useRef } from "react";
import "./find-car-form.css";
// import "./styles/find-car-form.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const FindCarForm = () => {
const cityRef = useRef("");
  const pickUpDateRef = useRef(0);
  const dropOffDateRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {

    const city = cityRef.current.value;
    const pickUpDate = pickUpDateRef.current.value;
    const dropOffDate = dropOffDateRef.current.value;

    if (city === "" || pickUpDate === "" || dropOffDate === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(`${BASE_URL}/cars/search/getCarBySearch?city=${city}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`)

    if (!res.ok) alert('Something went wrong')

    const result = await res.json()

    navigate(`/cars/search?city=${city}&pickUpDate=${pickUpDate}&dropOffDate=${dropOffDate}`, { state: result.data })
  }
  



  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="city"
          name="city"
            // required 
            ref={cityRef} />
        </FormGroup>

        {/* <FormGroup className="form__group">
          // <input type="text" placeholder="To address" required />
        </FormGroup> */}

        <FormGroup
          className="form__group">
          <input type="date"
          name="pickUpDate"
            placeholder="YYYY-MM-DD"
            // required 
            ref={pickUpDateRef}
          />
        </FormGroup>

        <FormGroup
          className="form__group">
          <input
            className="time"
            type="date"
            name="dropOffDate"
            placeholder="YYYY-MM-DD"
            // required
            ref={dropOffDateRef}
          />
        </FormGroup>
        {/* <FormGroup className="select__group">
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup> */}

        <FormGroup className="form__group">
          <button className="btn find__car-btn" type="submit" onClick={searchHandler}>Find Car</button>
        </FormGroup>

        
      </div>
    </Form>
  );
};

export default FindCarForm;
