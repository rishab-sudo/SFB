import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-top">
            {/* ABOUT */}
            <Col lg={3} md={6} className="footer-col">
             <div className="footer-logo">
            <img src={require("../assets/polyfab-footer-logo2.png")} alt="Logo" />
          </div>
Santosh Polyfab operates with a modern manufacturing infrastructure and dedicated 
teams for procurement, production, quality control, and sales, ensuring reliable supply and consistent quality in every product we deliver.
            </Col>

            {/* QUICK LINKS */}
            <Col lg={3} md={6} className="footer-col">
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/industry">Industries</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
              </div>
            </Col>

            {/* CONTACT */}
            <Col lg={3} md={6} className="footer-col">
               <div>
              <h5>Contact</h5>
              <p>Email: <a href="mailto: santoshpolyfab@gmail.com"> santoshpolyfab@gmail.com</a></p>
              <p>Phone: <a href="tel:+8447620822 ">+91 8447620822 </a></p>
              </div>
            </Col>

            {/* ADDRESS */}
            <Col lg={3} md={6} className="footer-col">
               <div>
              <h5>Address</h5>
              <p>
               Vill: Navadavan, Faridpur - 243503<br />
               Bareilly (UP)
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <span>© Polyfab 2026 | All Rights Reserved.</span>
          <span>
            Designed & Developed by <strong>21Maneuvers</strong>
          </span>
        </Container>
      </div>
    </>
  );
};

export default Footer;
