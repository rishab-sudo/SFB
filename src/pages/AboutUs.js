import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container fluid className="about g-0">
      {/* ===== SECTION 1 ===== */}
      <section className="about-section-one">
        <Container className="about-container">
          <Row className="align-items-between">
            {/* LEFT CONTENT */}
            <Col lg={6} md={12}>
              <div className="about-content">
                <h2 className="about-heading page-heading">About Our Company</h2>
                <h4 className="about-subheading page-large-heading">
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
  <video
    className="about-image"
    src={require("../assets/video/Website Video.mp4")}  // change to your video file
    autoPlay
    muted
    loop
    playsInline
  />
</div>

            </Col>
          </Row>
             <Row className="align-items-start p-0 ">
   <Col lg={12} md={12}>
              <div className="our-quality-content">
                <h2 className="our-quality-heading page-heading">Our Quality Promise</h2>
                <h4 className="our-quality-subheading page-large-heading">
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

   
<section className="mission-vision-section g-0">
  <div className="mission-vision-overlay">
    <Container>
      <div className="mission-vision-wrapper">

        {/* MISSION - TOP LEFT */}
        <div className="mission-box">
          <h4 cla>Our Mission</h4>
          <p>
            Our mission is to innovate and provide diversified packaging solutions
            that empower our customers, reduce environmental impact, and create
            lasting value for our stakeholders.
          </p>
        </div>

        {/* VISION - BOTTOM RIGHT */}
        <div className="vision-box">
          <h4>Our Vision</h4>
          <p>
            Our vision is to enhance the lives of business communities through the
            most reliable packaging solutions and a value-driven partnership.
          </p>
          <p>
            We also believe in working in an open and transparent way so that our
            customers are aware and apprised about timelines, schedules and costs.
          </p>
        </div>

      </div>
    </Container>
  </div>
</section>



            {/* ===== SECTION 3 : DIRECTORS ===== */}
      <section className="directors">
        <Container className="directors-container">
          {/* ROW 1: TEXT LEFT, IMAGE RIGHT */}
          <Row className="align-items-between directors-row">
            <Col lg={6} md={12}>
              <div className="directors-content">
                <h2 className="directors-heading page-heading">Director</h2>
                <h4 className="directors-subheading page-large-heading">Mr. Manoj Kumar Agarwal</h4>
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
                <h2 className="directors-heading page-heading">Co-Director</h2>
                <h4 className="directors-subheading page-large-heading">Mr. Bharat Agarwal</h4>
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
                <h2 className="directors-heading page-heading">Managing Director</h2>
                <h4 className="directors-subheading page-large-heading">Mr. Rajjat Agarwal</h4>
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
