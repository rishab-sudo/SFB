import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PageTopBanner.css";

const PageTopBanner = ({ title, currentPage }) => {
  return (
    <section className="page-top-banner">
      <div className="page-top-banner-overlay">
        <Container>
          <div className="page-top-banner-content">
            <h1 className="page-top-banner-title">{title}</h1>

            <div className="page-top-banner-breadcrumb">
              <Link to="/" className="page-top-banner-home">
                Home
              </Link>
              <span className="page-top-banner-separator"> &gt; </span>
              <span className="page-top-banner-current">{currentPage}</span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default PageTopBanner;
