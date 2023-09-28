import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import congregation from "../assets/img/congration2.jpg"
import time from "../assets/img/time.svg"
import location from "../assets/img/location.svg"
import worship from "../assets/img/worship.jpg"
import TrackVisibility from 'react-on-screen';
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
                                    <h1>Worship With Us</h1>
                                    <br/>
                                
                                    <p>We would love for you to worship with us.</p>

                                    <p>Our services hold every Sunday by 8AM </p>
                                    <p>Find the closest centre to you </p>
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
                                        <h1>Ilesa Center</h1>
                                        <h2>GHCC, No 7, Raimi omole street. Ilesa.Osun State. Nigeria</h2>
                                        <div className="green"></div>
                                    </div>
                                    <div className="contactcard">
                                        <img src={location} alt="Contact Us" />
                                        <br/>
                                        <h1>Ife Center</h1>
                                        <h2>Banquet Hall, Mayfair Hotel, Mayfair. ILE-IFE.Osun State. Nigeria</h2>
                                        <div className="green"></div>
                                    </div>
                                    <div className="contactcard">
                                        <img src={location} alt="Contact Us" />
                                        <br/>
                                        <h1>Osogbo Center</h1>
                                        <h2>Nuj secretariat, Beside Technical College.Osogbo .Osun State. Nigeria</h2>
                                        <div className="green"></div>
                                    </div>
                                    <div className="contactcard">
                                        <img src={location} alt="Contact Us" />
                                        <br/>
                                        <h1>Lagos Center</h1>
                                        <h2>Fullfilment Assembly. 3, Toyin Street, Ikeja .Lagos State. Nigeria</h2>
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
                                     <img src={worship} alt="" />
                                    <img src={congregation} alt=""/>
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