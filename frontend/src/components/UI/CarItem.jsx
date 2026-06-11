import React from "react";
import { Col } from "reactstrap";

const CarItem = ({ item }) => {
  return (
    <Col lg="4" className="mb-4">
      <div className="car__item">
        <img src={item.imgUrl} alt={item.carName} className="w-100" />

        <div className="car__info">
          <h5>{item.carName}</h5>
          <h6>${item.price} / Day</h6>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;