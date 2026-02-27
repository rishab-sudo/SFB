import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomeAbout.css";

const HomeAbout = () => {
  return (
    <>
      <section className="home-about">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12}>
              <div className="home-about-content">
                <span className="home-about-tag page-heading">
                  About Us
                </span>

                <h2 className="home-about-heading page-large-heading">
                  We Offer Solutions For <br />
                  Your Brand Packaging
                </h2>

                <p className="home-about-description page-description">
                  Santosh Polyfab Pvt.Ltd. located in Bareilly (UP) started its
                  production of PP woven fabric and bags in 2017, spread across
                  220000 sq ft with state of art machinery and infrastructure,
                  since then we have been adhering to the market trends &
                  demand for innovative products.
                </p>

                <div className="home-about-points">
                  <ul className="home-about-list">
                    <li className="home-about-list-item">
                      Innovative Packaging
                    </li>
                    <li className="home-about-list-item">
                      On-time Delivery.
                    </li>
                    <li className="home-about-list-item">
                      Customer Satisfaction
                    </li>
                  </ul>

                  <ul className="home-about-list">
                    <li className="home-about-list-item">
                      Quality Conscious product.
                    </li>
                    <li className="home-about-list-item">
                      Continuous Improvement
                    </li>
                    <li className="home-about-list-item">
                      Conserving Natural Resources
                    </li>
                  </ul>
                </div>

                <Link to="/about">
                  <button className="home-about-btn">Know More</button>
                </Link>
              </div>
            </Col>

            {/* RIGHT VIDEO */}
            <Col lg={6} md={12}>
              <div className="home-about-image-wrapper">
                <video
                  className="home-about-image"
                  src={require("../assets/video/Website Video.mp4")}
                  autoPlay
                  muted
                  loop
                  playsInline
                  loading="lazy"
                />
                <span className="home-about-play-btn">▶</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ================= CERT DIV ================= */}
      <section className="cert-div">
        <Container>
          <h3 className="cert-heading page-heading">Our Certifications & Standards</h3>

          <div className="cert-wrapper">
            <div className="cert-item">
              <img
                src={require("../assets/icons/iso2.png")}
                alt="ISO Certified"
              />
              <p>ISO 9001:2015</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/iso2.png")}
                alt="Quality Assured"
              />
              <p>ISO 1400:2015</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/uppcb-erp (1).png")}
                alt="Eco Friendly"
              />
              <p>ERP</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/BIS.png")}
                alt="Trusted Manufacturer"
              />
              <p>BIS Cement IS 11652:2017</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/BIS.png")}
                alt="Export Quality"
              />
              <p>BIS Sugar IS 14968:2015</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeAbout;