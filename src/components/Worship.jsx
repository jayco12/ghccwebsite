import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.jpg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import TrackVisibility from 'react-on-screen';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const Worship = () => {

  return (
    <Router>
    <section className="worship" id="Service">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={10}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                    "animate__animated animate__fadeIn"
                    : ""
                }>
                  <h1> Helping men find fulfilment in life through Christ</h1>
                 
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