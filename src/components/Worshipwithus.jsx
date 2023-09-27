import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import congregation from "../assets/img/congration2.jpg"
import time from "../assets/img/time.png"
import location from "../assets/img/location.png"
import worship from "../assets/img/worship.jpg"
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";
export const Worshipwithus = () => {


    return (
        <Router>
        <section className="worshipwithus" id="worshipwithus">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ? 
                                  "animate__animated animate__fadeIn" 
                                  : ""
                                  }>
                                    <h2>Worship With Us</h2>
                                    <br/>
                                
                                    <p>We would love for you to worship with us.</p>

                                    <p>Our services hold every Sunday by 8AM </p>
                                    <br/>
                                <br/>
                                    <div className="contactcard">
                                        <img src={time} alt="Contact Us" />
                                        <br/>

                                        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8:00AM</h1>
                                        <div className="green"></div>
                                    </div>
                                    <div className="contactcard">
                                        <img src={location} alt="Contact Us" />
                                        <br/>
                                        <h1>No 7, Raimi omole street</h1>
                                        <div className="green"></div>
                                    </div>

                                </div>

                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={
                                    isVisible ?
                                        "animate__animated animate__fadeIn"
                                        : ""
                                }>
                                     <img src={worship} />
                                    <img src={congregation} />
                                </div>
                               

                            }
                            
                        </TrackVisibility>
                        <br/>
                                <br/>
                    </Col>
                </Row>
            </Container>
        </section>
        </Router>
    )
}