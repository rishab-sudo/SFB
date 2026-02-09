import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Industry.css";
import PageTopBanner from "../components/PageTopBanner";

const data = [
  {
    id: 1,
    title: "J.K. Cement Works",
    desc: "A trusted partner for consistent quality packaging and material supply.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 2,
    title: "Wonder Cement Limited",
    desc: "Serving with reliable packaging solutions and timely deliveries.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 3,
    title: "Heidelberg India Limited",
    desc: "Supporting operations with dependable and high-performance materials.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 4,
    title: "L.H. Sugar Factories Ltd.",
    desc: "Providing quality packaging materials for smooth industrial operations.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 5,
    title: "Dhampur Sugar Mills Ltd.",
    desc: "Delivering consistent quality and reliable supply for industrial needs.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 6,
    title: "Dhampur Bio Organics Ltd.",
    desc: "Partnering with a focus on quality, efficiency, and long-term reliability.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 7,
    title: "Dwarikesh Sugar Industries Ltd.",
    desc: "Trusted for durable packaging materials and dependable service support.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
  {
    id: 8,
    title: "Shubham Goldie Masale Pvt.Ltd.",
    desc: "Supplying packaging materials with consistent quality and performance.",
    img: require("../assets/Banner/sfb-demo-bg.jpg"),
  },
];


const Industry = () => {
  return (
    <>
         <PageTopBanner
title="Industries"
  currentPage="Industries"
  backgroundImage={require("../assets/Banner/sfb-demo-bg.jpg")}
/>
    <Container fluid className="industry-section">
      <Container className="industry-heading-para-div">

  <h1 className="page-large-heading">Our Esteemed Customers</h1>
  <p className="page-description">
    Over the years, Santosh Polyfab has earned the trust of leading organizations
    by delivering high-quality packaging materials and dependable service. We
    continue to support our clients with reliable products and long-term value.
  </p>


      </Container>
      <Container className="industry">
        <Row className="industry-row">
          {data.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">
              <div className="industry-card">
                {/* IMAGE */}
                <div className="industry-card-image">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* OVERLAPPING CONTENT BOX */}
                <div className="industry-card-content">
                  <h5 className="industry-card-title">{item.title}</h5>
                  <p className="industry-card-text">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
    </>
  );
};

export default Industry;
