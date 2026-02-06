import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Products.css";

const productsData = [
  {
    id: 1,
    title: "PP Fabric",
    desc: "High quality PP fabric for multiple industrial applications.",
    img: "/products/p1.jpg",
    route: "/products/pp-fabric",
  },
  {
    id: 2,
    title: "PP Bags",
    desc: "Durable and customizable PP bags for packaging needs.",
    img: "/products/p2.jpg",
    route: "/products/pp-bags",
  },
  {
    id: 3,
    title: "Monolayer Films",
    desc: "Premium monolayer films with excellent strength and finish.",
    img: "/products/p3.jpg",
    route: "/products/monolayer-films",
  },
  {
    id: 4,
    title: "Multifilament Yarn",
    desc: "Strong multifilament yarn for industrial and commercial use.",
    img: "/products/p4.jpg",
    route: "/products/multifilament-yarn",
  },
  {
    id: 5,
    title: "Reprocess Granules",
    desc: "Eco-friendly reprocessed granules with reliable performance.",
    img: "/products/p5.jpg",
    route: "/products/reprocess-granules",
  },
  {
    id: 6,
    title: "Custom Packaging",
    desc: "Tailor-made packaging solutions for your business.",
    img: "/products/p6.jpg",
    route: "/products/custom-packaging",
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <Container fluid className="products-section">
      <Container>
        <Row className="products-row">
          {productsData.map((item) => (
            <Col lg={4} md={6} sm={12} key={item.id} className="mb-4">
              <div className="products-card">
                {/* IMAGE */}
                <div className="products-card-image">
                  <img src={item.img} alt={item.title} />
                </div>

                {/* CONTENT */}
                <div className="products-card-content">
                  <h5 className="products-card-title">{item.title}</h5>
                  <p className="products-card-text">{item.desc}</p>

                  <button
                    className="products-card-btn"
                    onClick={() => navigate(item.route)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Products;
