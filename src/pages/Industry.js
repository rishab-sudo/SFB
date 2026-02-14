import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Industry.css";
import PageTopBanner from "../components/PageTopBanner";

const data = [
  {
    id: 1,
    title: "Cement Industry",
    desc: "A trusted partner for consistent quality packaging and material supply.",
    img: require("../assets/industy/industry-cement3.png"),
  },
  {
    id: 2,
    title: "Sugar Industry",
    desc: "Serving with reliable packaging solutions and timely deliveries.",
    img: require("../assets/industy/industry-sugar2.png"),
  },
  {
    id: 3,
    title: "Flour Mills",
    desc: "Supporting operations with dependable and high-performance materials.",
    img: require("../assets/industy/industry-flour2.png"),
  },
  {
    id: 4,
    title: "Solvent Plant",
    desc: "Providing quality packaging materials for smooth industrial operations.",
    img: require("../assets/industy/industry-sugar2.png"),
  },
  {
    id: 5,
    title: "Rice Mills",
    desc: "Delivering consistent quality and reliable supply for industrial needs.",
    img: require("../assets/industy/industry-rice2.png"),
  },
  {
    id: 6,
    title: "Cattle Feed",
    desc: "Partnering with a focus on quality, efficiency, and long-term reliability.",
    img: require("../assets/industy/industry-cattle2.png"),
  },
  {
    id: 7,
    title: "Irrigation",
    desc: "Trusted for durable packaging materials and dependable service support.",
    img: require("../assets/industy/industry-agriculture2.png"),
  },
  {
    id: 8,
    title: "Food Grain & Other Food Industries",
    desc: "Supplying packaging materials with consistent quality and performance.",
    img: require("../assets/industy/industry-food2.png"),
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

  <h1 className="page-heading">Our Esteemed Customers</h1>
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
                  <img   loading="lazy" src={item.img} alt={item.title} />
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
