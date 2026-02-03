import React from "react";
import { Container } from "react-bootstrap";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="home-banner-overlay">
        <Container>
          <div className="home-banner-content">
            <h1>Engineering Quality That Performs</h1>
            <p>
              Delivering precision-driven manufacturing solutions backed by
              robust infrastructure, skilled professionals, and uncompromising
              quality standards.
            </p>
          </div>
        </Container>
      </div>

      {/* BOTTOM OVERLAP SECTION */}
      <div className="hb-bottom-wrapper">
        {/* LEFT DARK BOX */}
        <div className="hb-bottom-left">
          <div className="hb-progress">
            <div className="hb-circle">95%</div>
            <p>Quality</p>
          </div>

          <div className="hb-progress">
            <div className="hb-circle">93%</div>
            <p>Sustainable</p>
          </div>

          <div className="hb-progress">
            <div className="hb-circle">90%</div>
            <p>Design</p>
          </div>
        </div>

        {/* RIGHT WHITE BOX */}
        <div className="hb-bottom-right">
          <h5>Trusted By Brand Like</h5>

          <div className="hb-brands-slider">
            <div className="hb-brands-track">
              {/* SLIDE 1 */}
              <div className="brand-item">
                <img src="/brand1.png" alt="HouseDesign" />
                <span>HouseDesign</span>
              </div>

              <div className="brand-item">
                <img src="/brand2.png" alt="LightHouse" />
                <span>LightHouse</span>
              </div>

              <div className="brand-item">
                <img src="/brand3.png" alt="StarScraft" />
                <span>StarScraft</span>
              </div>

              {/* DUPLICATE FOR INFINITE LOOP */}
              <div className="brand-item">
                <img src="/brand1.png" alt="HouseDesign" />
                <span>HouseDesign</span>
              </div>

              <div className="brand-item">
                <img src="/brand2.png" alt="LightHouse" />
                <span>LightHouse</span>
              </div>

              <div className="brand-item">
                <img src="/brand3.png" alt="StarScraft" />
                <span>StarScraft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
