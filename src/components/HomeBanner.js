import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import "./HomeBanner.css";

const slides = [
  {
    image: require("../assets/Banner/factory1.png"),
    title: "Reliable Packaging Materials, Built to Perform",
    desc: "At Santosh Polyfab, we manufacture PP fabric, PP bags, monolayer films, multifilament yarn, and reprocess granules with uncompromising quality.",
  },
  {
    image: require("../assets/Banner/factory2-blue.png"),
    title: "High Quality PP Bags for Every Industry",
    desc: "Our PP bags are designed for strength, durability and long-lasting performance across multiple industries.",
  },
  {
    image: require("../assets/Banner/factory3-blue.png"),
    title: "Sustainable & Strong Manufacturing",
    desc: "We focus on eco-friendly processes while maintaining premium quality and consistency in every product.",
  },
  {
    image: require("../assets/Banner/factory-solor.png"),
    title: "Sustainable & Strong Manufacturing",
    desc: "We focus on eco-friendly processes while maintaining premium quality and consistency in every product.",
  },
];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  const [design, setDesign] = useState(0);
  const [quality, setQuality] = useState(0);
  const [sustainable, setSustainable] = useState(0);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const animate = (setter, target) => {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= target) clearInterval(interval);
      }, 20);
    };

    animate(setDesign, 100);
    animate(setQuality, 100);
    animate(setSustainable, 100);
  }, []);

  return (
    <section
      className="home-banner"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      {/* OVERLAY */}
      <div className="home-banner-overlay">
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="home-banner-content"
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1>{slides[current].title}</h1>
              <p>{slides[current].desc}</p>

              {/* BUTTON ROW */}
              <div className="hb-btn-row">
                <Link to="/products/pp-fabric" className="hb-btn hb-btn-outline">
                  Our Products
                </Link>
                <Link to="/contact" className="hb-btn hb-btn-outline">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </div>

      {/* ✅ BOTTOM OVERLAP SECTION (NO MOTION, SAME POSITION) */}
      <div className="hb-bottom-wrapper">
        {/* LEFT DARK BOX */}
        <div className="hb-bottom-left">
          <div className="hb-progress">
            <div className="hb-circle">{design}%</div>
            <p>Design</p>
          </div>

          <div className="hb-progress">
            <div className="hb-circle">{quality}%</div>
            <p>Quality</p>
          </div>

          <div className="hb-progress">
            <div className="hb-circle">{sustainable}%</div>
            <p>Sustainable</p>
          </div>
        </div>

        {/* RIGHT WHITE BOX */}
        <div className="hb-bottom-right">
          <h5>Certified</h5>

          <div className="hb-brands-slider">
            <div className="hb-brands-track">
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

              {/* duplicate for smooth loop */}
              <div className="brand-item">
                <img src="/brand1.png" alt="HouseDesign" />
                <span>HouseDesign</span>
              </div>

              <div className="brand-item">
                <img src="/brand2.png" alt="LightHouse" />
                <span>LightHouse</span>
              </div>

              <div className="brand-item">
                <img src="/brand3.png" alt="StarSccraft" />
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
