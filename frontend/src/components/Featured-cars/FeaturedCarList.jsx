import React from "react";
import CarItem from "../../shared/CarItem";
import carData from  "../../assets/data/cars"
import { Col } from "reactstrap";

import useFetch from "./../../hooks/useFetch";
import { BASE_URL } from "./../../utils/config";

const FeaturedCarList = () =>{

    const {data: featuredCars, loading, error} = useFetch(
        `${BASE_URL}/cars/search/getFeaturedCars`
        );

    
    return (
        <>
        {
            loading && <h4>loading......</h4>
        }
        {
            error && <h4>{error}</h4>
        } 
        {!loading && !error && featuredCars?.map(car => (
            <Col lg="3" className="mb-4" key= {car._id}>
                <CarItem car={car}/>
                </Col>
                ))}
        </>
    );
};

export default FeaturedCarList;