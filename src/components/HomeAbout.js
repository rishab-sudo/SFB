import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco laboris
                sed.
              </p>

              <div className="home-about-points">
                <ul className="home-about-list">
                  <li className="home-about-list-item">Innovative Packaging</li>
                  <li className="home-about-list-item">Creative Solutions</li>
                  <li className="home-about-list-item">Customer Satisfaction</li>
                </ul>

                <ul className="home-about-list">
                  <li className="home-about-list-item">Offers Significant Value</li>
                  <li className="home-about-list-item">Continuous Improvement</li>
                  <li className="home-about-list-item">
                    Conserving Natural Resources
                  </li>
                </ul>
              </div>

              <button className="home-about-btn">About Us</button>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6} md={12}>
            <div className="home-about-image-wrapper">
              <img
                src={require("../assets/Banner/sfb-demo-bg.jpg")}
                alt="Packaging Machine"
                className="home-about-image"
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
