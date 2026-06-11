import React, { useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useLocation } from "react-router-dom";
import CarItem from "./../shared/CarItem";

const SearchResultList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const city = searchParams.get("city");
  const pickUpDate = searchParams.get("pickUpDate");
  const dropOffDate = searchParams.get("dropOffDate");
  const [data, setData] = useState([]);

 

  return (
    <>
      <CommonSection title={"Car search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <h4 className="text-center"> No Car found</h4>
            ) : (
              data?.map((car) => (
                <Col lg="3" className="mb-4" key={car._id}>
                  <CarItem car={car} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SearchResultList;
