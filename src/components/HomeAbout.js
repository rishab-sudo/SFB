import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={6} md={12}>
            <div className="home-about-content">
              <span className="home-about-tag page-heading">About Us</span>

              <h2 className="home-about-heading page-large-heading">
                We Are Solutions For <br />
                Your Brand Packaging
              </h2>

              <p className="home-about-description page-description">
             Santosh Polyfab Pvt Ltd located in Bareilly (UP) started its production of PP woven fabric
              and bags in 2017, spread across 220000 sq ft with state of art machinery and infrastructure, since then we have been adhering to the market trends & demand for innovative products.
              </p>

              <div className="home-about-points">
                <ul className="home-about-list">
                  <li className="home-about-list-item">Innovative Packaging</li>
                  <li className="home-about-list-item">On-time Delivery.</li>
                  <li className="home-about-list-item">Customer Satisfaction</li>
                </ul>

                <ul className="home-about-list">
                  <li className="home-about-list-item">Quality Conscious product.</li>
                  <li className="home-about-list-item">Continuous Improvement</li>
                  <li className="home-about-list-item">
                    Conserving Natural Resources
                  </li>
                </ul>
              </div>

              <Link to ="/about"><button className="home-about-btn">Know More</button></Link>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
<Col lg={6} md={12}>
  <div className="home-about-image-wrapper">
    <video
      className="home-about-image"
      src={require("../assets/video/Website Video.mp4")}
      autoPlay
      muted
      loop
      playsInline
    />
    <span className="home-about-play-btn">▶</span>
  </div>
</Col>

        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;
