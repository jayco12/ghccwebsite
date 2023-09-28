import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col, Button } from "react-bootstrap";
import facebook from '../assets/img/facebook.svg';
import x from '../assets/img/x.svg';
import send from '../assets/img/send.png'
import logo from '../assets/img/Ghcclogo.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Col className="logoC">
            
          <a href="#home" ><img src={logo} alt="" className="logo"/></a>
          
          <a className="name " href="#home">GREAT HOUSE CHRISTIAN CENTRE</a>
          </Col>
        
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#Service" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Service')}>Service</Nav.Link>
              <Nav.Link href="#give" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('give')}>Give</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.facebook.com/GHCCGLOBAL"><img src={facebook} alt="" /></a>
                <a href="https://twitter.com/ghccofficial"><img src={x} alt="" /></a>
         
                <a href="https://www.instagram.com/ghccglobal/"><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
              <Button>Contact &nbsp; <img className="send" src={send} alt="" /> </Button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
