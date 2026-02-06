import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle, FaCogs, FaLeaf, FaUsers } from "react-icons/fa";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <Container fluid className="about">
      {/* ===== SECTION 1 ===== */}
      <section className="about-section-one">
        <Container className="about-container">
          <Row className="align-items-between">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12}>
              <div className="about-content">
                <h2 className="about-heading page-large-heading">About Our Company</h2>
                <h4 className="about-subheading">
                  Delivering Excellence in Packaging Solutions
                </h4>

                <p className="about-text">
                  We are a leading packaging solutions provider, focused on
                  delivering high-quality, innovative, and sustainable
                  packaging products for brands across industries. Our
                  infrastructure and skilled team ensure consistent quality
                  and timely delivery.
                </p>

                <p className="about-text">
                  With years of experience and a customer-first approach, we
                  help businesses enhance their brand value through smart,
                  reliable, and cost-effective packaging solutions.
                </p>
              </div>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6} md={12}>
              <div className="about-image-wrapper">
                <img
                     src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="About Us"
                  className="about-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== SECTION 2 ===== */}
      <section className="our-quality">
        <Container className="our-quality-container">
        <Row className="align-items-between">
            {/* LEFT IMAGE */}
            <Col lg={6} md={12}>
              <div className="our-quality-image-wrapper">
                <img
                     src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Our Quality"
                  className="our-quality-image"
                />
              </div>
            </Col>

            {/* RIGHT CONTENT */}
            <Col lg={6} md={12}>
              <div className="our-quality-content">
                <h2 className="our-quality-heading page-large-heading">Our Quality Promise</h2>
                <h4 className="our-quality-subheading">
                  Built on Innovation, Driven by Excellence
                </h4>

                <p className="our-quality-text">
                  We follow strict quality standards across every stage of
                  production. Our focus is to deliver reliable, sustainable,
                  and high-performance packaging solutions that help your
                  business grow.
                </p>

                {/* FEATURES */}
                <div className="our-quality-boxes">
                  <div className="our-quality-box">
                    <FaCheckCircle className="our-quality-icon" />
                    <span>Premium Quality Standards</span>
                  </div>

                  <div className="our-quality-box">
                    <FaCogs className="our-quality-icon" />
                    <span>Advanced Manufacturing</span>
                  </div>

                  <div className="our-quality-box">
                    <FaLeaf className="our-quality-icon" />
                    <span>Eco-Friendly Approach</span>
                  </div>

                  <div className="our-quality-box">
                    <FaUsers className="our-quality-icon" />
                    <span>Customer-Centric Service</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

            {/* ===== SECTION 3 : DIRECTORS ===== */}
      <section className="directors">
        <Container className="directors-container">
          {/* ROW 1: TEXT LEFT, IMAGE RIGHT */}
          <Row className="align-items-between directors-row">
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Our Director</h2>
                <h4 className="directors-subheading">Leadership With Vision</h4>
                <p className="directors-text">
                  Our leadership team brings decades of experience in packaging
                  innovation, operations excellence, and customer-first strategy.
                  Their vision drives sustainable growth and consistent quality.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="directors-image-wrapper">
                <img
                    src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Director 1"
                  className="directors-image"
                />
              </div>
            </Col>
          </Row>

          {/* ROW 2: IMAGE LEFT, TEXT RIGHT */}
          <Row className="align-items-center directors-row">
            <Col lg={6} md={12}>
              <div className="directors-image-wrapper">
                <img
                     src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Director 2"
                  className="directors-image"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Co-Director</h2>
                <h4 className="directors-subheading">Operational Excellence</h4>
                <p className="directors-text">
                  Focused on process optimization and quality control, our
                  co-director ensures every product meets the highest standards
                  while maintaining efficiency and reliability.
                </p>
              </div>
            </Col>
          </Row>

          {/* ROW 3: TEXT LEFT, IMAGE RIGHT */}
          <Row className="align-items-center directors-row">
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Managing Director</h2>
                <h4 className="directors-subheading">Driving Innovation</h4>
                <p className="directors-text">
                  With a strong focus on innovation and sustainability, our
                  managing director leads strategic growth and long-term vision
                  for the company.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="directors-image-wrapper">
                <img
                  src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Director 3"
                  className="directors-image"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Container>
  );
};

export default AboutUs;
