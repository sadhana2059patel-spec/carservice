import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section mb-5">
      <Container 
      // className="text-center"
      >
        <Row>
          <Col lg="12">
          <h1 
        className="text-light"
        >
          {title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
