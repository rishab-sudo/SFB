import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <Container fluid>
        <Row className="align-items-center">
          {/* LEFT IMAGE */}
          <Col lg={6} md={12} className="p-0">
            <div className="why-choose-image-wrapper">
              <img
                src={require("../assets/Banner/sfb-demo-bg.jpg")}
                alt="Why Choose Us"
                className="why-choose-image"
              />

              <div className="why-choose-image-box">
                <h4>Trusted Packaging Partner</h4>
                <p>Delivering quality & innovation across industries</p>
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6} md={12}>
            <div className="why-choose-content">
              <span className="why-choose-tag">Why Us</span>

              <h2 className="why-choose-heading">
                Accelerating Innovations <br />
                In Packaging
              </h2>

              <p className="why-choose-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco laboris
                sed.
              </p>

              <div className="why-choose-features">
                <div className="why-choose-feature">
                  <h5>Best Quality Of Packaging</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>

                <div className="why-choose-feature">
                  <h5>Creative Packaging</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>

                <div className="why-choose-feature">
                  <h5>Environmentally Friendly</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
