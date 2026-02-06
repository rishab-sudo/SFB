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
            <img src={require("../assets/logo22.png")} alt="Logo" />
          </div>
              <p>
                We operate from a robust infrastructure, divided into key
                departments like procurement, production, quality control, and
                sales. Our skilled professionals ensure seamless operations,
                delivering excellence across every process.
              </p>
            </Col>

            {/* QUICK LINKS */}
            <Col lg={3} md={6} className="footer-col">
            <div>
              <h5>Quick Links</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/industries">Industries</a></li>
              </ul>
              </div>
            </Col>

            {/* CONTACT */}
            <Col lg={3} md={6} className="footer-col">
               <div>
              <h5>Contact</h5>
              <p>Email: <a href="mailto:admin@polyfab.in">admin@polyfab.in</a></p>
              <p>Phone: <a href="tel:+919740990558">(+91) 9740990558</a></p>
              </div>
            </Col>

            {/* ADDRESS */}
            <Col lg={3} md={6} className="footer-col">
               <div>
              <h5>Address</h5>
              <p>
                C-10, Jai Bharath Industrial Estate,<br />
                Yeshwanthpur,<br />
                Bangalore - 560022
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
            Designed & Developed by <strong>21Maneuvers Pvt. Ltd.</strong>
          </span>
        </Container>
      </div>
    </>
  );
};

export default Footer;
