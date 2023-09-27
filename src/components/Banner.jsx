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
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Helping men find fulfilment in life through Christ", "  Reaching, Raising, equipping men in their walk with God and work for God"];
  const period = 500;
  const [activeLink, setActiveLink] = useState('home');
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ?
                   "animate__animated animate__fadeIn"
                    : ""
                    }>
                  <span className="tagline">GREAT HOUSE CHRISTIAN CENTRE</span>
                  <h1>{``} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Helping men find fulfilment in life through Christ", "  Reaching, Raising, equipping men in their walk with God and work for God" ]'><span className="wrap">{text}</span></span></h1>
                 <div className="about">
                 <HashLink to='#about'>
                  <button className={activeLink === 'about' } onClick={() => onUpdateActiveLink('about')}>About Us</button>
                  </HashLink>
                  <HashLink to='#connect'>
                  <button className={activeLink === 'contact'} onClick={() => onUpdateActiveLink('contact')}>Contact Us</button>
                 </HashLink>
                  </div>
                </div>
                }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                   isVisible ?
                   "animate__animated animate__zoomIn" 
                   :""
                   }>
                  {/* <img src={headerImg} alt="Header Img" /> */}
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