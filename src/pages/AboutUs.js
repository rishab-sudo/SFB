import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DoteedLine from "../components/DotedLine"
import { FaCheckCircle, FaCogs, FaLeaf, FaUsers } from "react-icons/fa";
import "./AboutUs.css";
import PageTopBanner from "../components/PageTopBanner";

const AboutUs = () => {
  return (
    <>
    <PageTopBanner
  title="About Us"
  currentPage="About Us"
  backgroundImage={require("../assets/Banner/sfb-demo-bg.jpg")}
/>
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
               Santosh Polyfab Pvt Ltd located in Bareilly (UP) started its production of PP woven 
               fabric and bags in 2017, spread across 220000 sq ft with state of art machinery and infrastructure, since then we have been adhering to the market trends & demand for innovative products.
               Stringent quality control measures, backed up by the vast experience of promoters and supported by highly experienced team having impeccable knowledge and a sense of innovation ensure that we supply quality products.
                </p>

                <p className="about-text">
Our company is built on an exceptional track record of customer satisfaction.
Our substantial increase in production capacity and immense success is based on a value driven engagement with our clients and a strong commitment in exceeding your expectations.
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
             <Row className="align-items-start p-0 ">
   <Col lg={12} md={12}>
              <div className="our-quality-content">
                <h2 className="our-quality-heading page-large-heading">Our Quality Promise</h2>
                <h4 className="our-quality-subheading">
                  Built on Innovation, Driven by Excellence
                </h4>

                <p className="our-quality-text">
           Through continuous research and development, we remain at the forefront of innovation, delivering products that not only meet functional requirements but also adhere to modern environmental and safety standards. The company’s 
           customer-centric approach, commitment to quality, and sustainable ethos have solidified its reputation as a trusted leader in this industry.
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

      {/*  */}
      <DoteedLine/>
      {/* */}
            {/* ===== SECTION 3 : DIRECTORS ===== */}
      <section className="directors">
        <Container className="directors-container">
          {/* ROW 1: TEXT LEFT, IMAGE RIGHT */}
          <Row className="align-items-between directors-row">
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Director</h2>
                <h4 className="directors-subheading">Mr. Manoj Kumar Agarwal</h4>
                <p className="directors-text">
He is the founder of the Company, successfully guiding the operations of the company. His vast experience of 30 years 
in manufacturing sector has helped in company’s growth.
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
          <Row className="align-items-between directors-row">
            <Col lg={6} md={12}>
              <div className="directors-image-wrapper">
                <img
                     src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Director 2"
                  className="directors-image directors-image2"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Co-Director</h2>
                <h4 className="directors-subheading">Mr. Bharat Agarwal</h4>
                <p className="directors-text">
Mr. Bharat frontlines strategy and marketing discipline with the vision to make the company a global leader. His dedication has constantly 
led to the growth and development of the company.
                </p>
              </div>
            </Col>
          </Row>

          {/* ROW 3: TEXT LEFT, IMAGE RIGHT */}
                  <Row className="align-items-between directors-row">
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-large-heading">Managing Director</h2>
                <h4 className="directors-subheading">Mr. Rajjat Agarwal</h4>
                <p className="directors-text">
Mr. Rajat with his innovative new ideas has helped the company to develop new products and contribute to its growth. His passion for the environment has always encouraged him to use Eco-Friendly substitutes and additives to reduce
 the consumption of plastics in day-to-day life.</p>
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
      {/* ===== SECTION 2 ===== */}
      {/* <section className="our-quality">
        <Container className="our-quality-container">
        <Row className="align-items-between">
         
            <Col lg={6} md={12}>
              <div className="our-quality-image-wrapper">
                <img
                     src={require("../assets/Banner/sfb-demo-bg.jpg")}
                  alt="Our Quality"
                  className="our-quality-image"
                />
              </div>
            </Col>

          
            <Col lg={6} md={12}>
              <div className="our-quality-content">
                <h2 className="our-quality-heading page-large-heading">Our Quality Promise</h2>
                <h4 className="our-quality-subheading">
                  Built on Innovation, Driven by Excellence
                </h4>

                <p className="our-quality-text">
           Through continuous research and development, we remain at the forefront of innovation, delivering products that not only meet functional requirements but also adhere to modern environmental and safety standards. The company’s 
           customer-centric approach, commitment to quality, and sustainable ethos have solidified its reputation as a trusted leader in this industry
                </p>

            
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
      </section> */}



    </Container>
    </>
  );
};

export default AboutUs;
