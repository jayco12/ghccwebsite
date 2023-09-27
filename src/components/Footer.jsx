import { Container, Row, Col } from "react-bootstrap";
import facebook from "../assets/img/facebook.svg";
import x from "../assets/img/x.svg";
import navIcon3 from "../assets/img/nav-icon3.svg"
import logo from "../assets/img/Ghcc logo.png"
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Col className="logoC">
          <a href="" ><img src={logo} alt="" className="logo"/></a>
          <a className="name " href="#">GREAT HOUSE CHRISTIAN CENTRE</a>
          </Col>   
            </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={facebook} alt="Icon" /></a>
              <a href=""><img src={x} alt="Icon" /></a>
              <a href=""><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}