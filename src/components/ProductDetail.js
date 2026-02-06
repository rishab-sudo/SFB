import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductDetail.css";

const ProductDetail = ({
  title,
  description,
  leftImage,
  rightImage,
  leftPoints,
  rightPoints,
  bottomText,
  prevLink,
  nextLink,
}) => {
  const navigate = useNavigate();

  return (
    <section className="product-detail">
      <Container className="product-detail-container">
        {/* HEADER */}
        <div className="product-detail-header">
          <h2 className="product-detail-heading page-large-heading">{title}</h2>
          <p className="product-detail-description page-description">{description}</p>
        </div>

        {/* TWO COLUMNS */}
        <Row className="product-detail-row">
          {/* LEFT SIDE */}
          <Col lg={6} md={12}>
            {/* IMAGE CARD */}
            <div className="product-detail-image-card">
              <img src={leftImage} alt="Left Product" />
            </div>

            {/* POINTS CARD */}
            <div className="product-detail-points-card">
              <ul className="product-detail-points">
                {leftPoints.map((point, index) => (
                  <li key={index}>
                    <FaCheckCircle className="product-detail-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* RIGHT SIDE */}
          <Col lg={6} md={12}>
            {/* IMAGE CARD */}
            <div className="product-detail-image-card">
              <img src={rightImage} alt="Right Product" />
            </div>

            {/* POINTS CARD */}
            <div className="product-detail-points-card">
              <ul className="product-detail-points">
                {rightPoints.map((point, index) => (
                  <li key={index}>
                    <FaCheckCircle className="product-detail-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        {/* BOTTOM TEXT */}
        <div className="product-detail-bottom-text">
          <p>{bottomText}</p>
        </div>

        {/* NAV BUTTONS */}
        <div className="product-detail-nav">
          <button
            className="product-detail-btn prev"
            onClick={() => navigate(prevLink)}
          >
            ← Prev Product
          </button>

          <button
            className="product-detail-btn next"
            onClick={() => navigate(nextLink)}
          >
            Next Product →
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;
