import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/thank-you.css'
import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import HeroSlider from "../components/UI/HeroSlider";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembers";


const ThankYou = () => {
    return (
    <section>
        <Container>
            <Row>
            <Col lg='12' className="pt-5 text-center">
                <div className="thank__you">
                    <span>
                        <i className="ri-checkbox-circle-line"></i>
                    </span>
                    <h1 className="mb-3 fw-semibold">Thank You</h1>
                    <h3 className="mb-4">Your Car is Booked.</h3>

                    <Button className="btn primary__btn w-25">
                        <Link to="/home">Back to Home</Link>
                    </Button>

                </div>
            </Col>
            </Row>
        </Container>
        <Testimonial/>
    </section>
    )
}

export default ThankYou;