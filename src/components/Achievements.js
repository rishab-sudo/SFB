import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Achievements.css";

const Achievements = () => {
  return (
    <Container fluid className="achv-fluid">
      <Container className="achv">
        {/* HEADER */}
        <div className="achv-header">
          <h2 className="achv-heading page-heading">Our Achievements</h2>
          <p className="achv-subheading page-large-heading">
            Delivering excellence through numbers that speak for our quality,
            trust, and performance.
          </p>
        </div>

        {/* BOXES */}
        <Row className="achv-row">
          <Col lg={3} md={6} sm={12}>
            <div className="achv-box">
              <div className="achv-icon-circle">
                <img src="/icons/experience.png" alt="Experience" />
              </div>
              <div className="achv-box-content">
                <h3>25+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="achv-box">
              <div className="achv-icon-circle">
                <img src="/icons/projects.png" alt="Projects" />
              </div>
              <div className="achv-box-content">
                <h3>1200+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="achv-box">
              <div className="achv-icon-circle">
                <img src="/icons/clients.png" alt="Clients" />
              </div>
              <div className="achv-box-content">
                <h3>800+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12}>
            <div className="achv-box">
              <div className="achv-icon-circle">
                <img src="/icons/awards.png" alt="Awards" />
              </div>
              <div className="achv-box-content">
                <h3>35+</h3>
                <p>Awards Won</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Achievements;
