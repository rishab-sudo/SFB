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
              <span className="why-choose-tag page-heading">Why Us</span>

              <h2 className="why-choose-heading page-large-heading">
                Accelerating Innovations <br />
                In Packaging
              </h2>

              <p className="why-choose-description page-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco laboris
                sed.
              </p>

              <div className="why-choose-features">
                <div className="why-choose-feature">
                  <h5>Best Quality Of Packaging</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className="why-choose-feature">
                  <h5>Creative Packaging</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>

                <div className="why-choose-feature">
                  <h5>Environmentally Friendly</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* ===== BOTTOM BOXES ===== */}
      <Container className="whyus-box-container">
        <div className="whyus-box-row">
          <div className="whyus-box-item">
            <img src="/icons/quality.png" alt="Quality" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Premium Quality</h5>
              <p>We maintain the highest standards in every product we deliver.</p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img src="/icons/innovation.png" alt="Innovation" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Innovative Solutions</h5>
              <p>Creative and modern packaging solutions for your brand.</p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img src="/icons/eco.png" alt="Eco Friendly" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Eco Friendly</h5>
              <p>We focus on sustainable and environmentally safe materials.</p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img src="/icons/support.png" alt="Support" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Reliable Support</h5>
              <p>Dedicated support team to help you at every step.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
