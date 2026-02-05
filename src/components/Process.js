import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { FaLightbulb, FaCogs, FaBoxOpen, FaTruck } from "react-icons/fa";
import "./Process.css";

const Process = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [line1, setLine1] = useState(false);
  const [line2, setLine2] = useState(false);
  const [line3, setLine3] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Sync lines with steps
  useEffect(() => {
    if (visible) {
      const t1 = setTimeout(() => setLine1(true), 1000); // when Step 2 appears
      const t2 = setTimeout(() => setLine2(true), 2000); // when Step 3 appears
      const t3 = setTimeout(() => setLine3(true), 3000); // when Step 4 appears

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [visible]);

  return (
    <section className="process" ref={sectionRef}>
      <Container className="process-container">
        {/* DOTTED LINE */}
        <div className="process-line">
          <span className={`process-line-seg ${line1 ? "line-active" : ""}`}></span>
          <span className={`process-line-seg ${line2 ? "line-active" : ""}`}></span>
          <span className={`process-line-seg ${line3 ? "line-active" : ""}`}></span>
        </div>

        {/* STEP 1 */}
        <div
          className={`process-item process-from-left ${
            visible ? "process-animate" : ""
          }`}
          style={{ animationDelay: "0s" }}
        >
          <div className="process-circle">
            <FaLightbulb className="process-icon"/>
          </div>
          <div className="process-text">
            <h5>Step 1</h5>
            <p>Understanding your packaging needs</p>
          </div>
        </div>

        {/* STEP 2 */}
        <div
          className={`process-item process-from-top ${
            visible ? "process-animate" : ""
          }`}
          style={{ animationDelay: "1s" }}
        >
          <div className="process-circle">
            <FaCogs className="process-icon"/>
          </div>
          <div className="process-text">
            <h5>Step 2</h5>
            <p>Designing and engineering the solution</p>
          </div>
        </div>

        {/* STEP 3 */}
        <div
          className={`process-item process-from-bottom ${
            visible ? "process-animate" : ""
          }`}
          style={{ animationDelay: "2s" }}
        >
          <div className="process-circle">
            <FaBoxOpen className="process-icon"/>
          </div>
          <div className="process-text">
            <h5>Step 3</h5>
            <p>Manufacturing with quality checks</p>
          </div>
        </div>

        {/* STEP 4 */}
        <div
          className={`process-item process-from-left ${
            visible ? "process-animate" : ""
          }`}
          style={{ animationDelay: "3s" }}
        >
          <div className="process-circle">
            <FaTruck className="process-icon"/>
          </div>
          <div className="process-text">
            <h5>Step 4</h5>
            <p>Delivery and customer satisfaction</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Process;
