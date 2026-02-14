import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <Container fluid>
        <Row className="align-items-center why-row">
          {/* LEFT IMAGE */}
          <Col lg={6} md={12} className="p-0">
            <div className="why-choose-image-wrapper">
              <img
                src={require("../assets/whychoose2.png")}
                alt="Santosh Polyfab Packaging Manufacturing"
                className="why-choose-image"
                  loading="lazy"
              />

              <div className="why-choose-image-box">
                <h4>Trusted Packaging Manufacturing Partner</h4>
                <p>
                  Supplying high-quality PP fabric, PP bags, films, yarn, and granules to industries
                </p>
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6} md={12}>
            <div className="why-choose-content">
              <span className="why-choose-tag page-heading">Why Santosh Polyfab</span>

              <h2 className="why-choose-heading page-large-heading">
                Driving Innovation 
                In Industrial Packaging
              </h2>

              <p className="why-choose-description page-description">
Santosh Polyfab is a trusted manufacturer and supplier of PP fabric, PP bags,
 monolayer films, multifilament yarn, and reprocessed granules. With modern infrastructure
  and a skilled team, we deliver consistent quality, reliable supply, and cost-effective material 
  solutions across multiple industries.
              </p>

              <div className="why-choose-features">
                <div className="why-choose-feature">
                  <h5>High-Quality Manufacturing</h5>
                  <p>
                    We follow strict quality control processes to ensure durable, reliable, and
                    performance-driven packaging materials.
                  </p>
                </div>

                <div className="why-choose-feature">
                  <h5>Advanced Production Facilities</h5>
                  <p>
                    Our modern manufacturing setup helps us deliver consistent output and meet
                    large-scale industrial requirements.
                  </p>
                </div>

                <div className="why-choose-feature">
                  <h5>Sustainable & Responsible Approach</h5>
                  <p>
                    We focus on efficient processes and reprocess granules to support eco-friendly
                    and responsible manufacturing practices.
                  </p>
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
            <img   loading="lazy" src= {require("../assets/icons/Quality.png")} alt="Premium Quality" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Premium Quality Materials</h5>
              <p>
                We ensure high standards in PP fabric, PP bags, films, yarn, and granules for
                long-lasting performance.
              </p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img src= {require("../assets/icons/innovative solution.png")} alt="Manufacturing Expertise" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Manufacturing Expertise</h5>
              <p>
                Years of industry experience and modern technology help us deliver reliable
                packaging solutions.
              </p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img   loading="lazy" src= {require("../assets/icons/eco friendly.png")} alt="Sustainable Manufacturing" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Sustainable Manufacturing</h5>
              <p>
                We promote responsible production through efficient processes and reprocessed
                materials.
              </p>
            </div>
          </div>

          <div className="whyus-box-item">
            <img   loading="lazy" src= {require("../assets/icons/support.png")} alt="Reliable Supply Support" className="whyus-box-icon" />
            <div className="whyus-box-text">
              <h5>Reliable Supply & Support</h5>
              <p>
                Our team ensures timely delivery and dependable support for all industrial clients.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
