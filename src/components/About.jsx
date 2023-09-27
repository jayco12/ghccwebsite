import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import congregation from "../assets/img/congregation.jpg"
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import {
    BrowserRouter as Router
} from "react-router-dom";
export const About = () => {


    return (
        <Router>
            <section className="aboutbanner" id="about">
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
                                    <div className="aboutimg">
                                        {/* <img src={pso} alt="Contact Us"/> */}
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
                                        <h2>About Us</h2>
                                        <br/>
                                        <p>

                                            God instructed Pastor Segun Oduyebo to come to Ilesa in 2005. God used his son
                                            Segun Oduyebo to start the church- GREAT HOUSE CHRISTIAN CENTRE started in
                                            2006. On March 14, 2006 to be precise, the church started on a rented landed property
                                            which was a refuse dump. That Tuesday, the first service held, and it eventually
                                            became the church weekly service called Champions meal and later changed to Walk
                                            with God service.
                                            On the 26th of June, 2006, the first Sunday service started with 8 people in attendance.
                                            In January 2007, the church was officially inaugurated by Bishop Taiwo Adelakun from
                                            Victory International Cathedral, Ibadan.
                                            The church had its first-year anniversary in June 2007
                                        </p>
                                            <div className="ContactUs">
                                            <HashLink to='#worshipwithus'>
                                            <button >Worship With Us</button>
                                            </HashLink>

                                        </div>
                                    </div>
                                }
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Router>
    )
}