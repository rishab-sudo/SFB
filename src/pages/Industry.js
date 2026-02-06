import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Industry.css";

const data = [
  { id: 1, title: "Food & Beverage", desc: "Safe and hygienic packaging solutions", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 2, title: "Pharmaceutical", desc: "High quality medical packaging", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 3, title: "Electronics", desc: "Protective and durable packaging", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 4, title: "Cosmetics", desc: "Attractive and premium packaging", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 5, title: "E-Commerce", desc: "Strong and reliable shipping boxes", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 6, title: "Automotive", desc: "Heavy duty packaging solutions", img: require("../assets/Banner/sfb-demo-bg.jpg")},
  { id: 7, title: "Textiles", desc: "Clean and safe fabric packaging", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 8, title: "Retail", desc: "Eye-catching retail packaging", img: require("../assets/Banner/sfb-demo-bg.jpg") },
  { id: 9, title: "FMCG", desc: "High volume packaging solutions", img: require("../assets/Banner/sfb-demo-bg.jpg")},
];

const Industry = () => {
  return (
    <Container fluid className="industry-section">
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
  );
};

export default Industry;
