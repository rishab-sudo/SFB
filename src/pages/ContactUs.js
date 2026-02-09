import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import PageTopBanner from "../components/PageTopBanner";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
     <PageTopBanner
title="Contact US"
  currentPage="Contact US"
  backgroundImage={require("../assets/Banner/sfb-demo-bg.jpg")}
/>
    <section className="contact-us">
      <Container>
        {/* TOP INFO BOXES */}
        <Row className="contact-us-box-row">
          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaPhoneAlt />
              </div>
              <h5 className="contact-us-box-title">Phone</h5>
              <p className="contact-us-box-main">(+91) 8447620822</p>
              <p className="contact-us-box-desc">
                Call us for any product or service related queries.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaEnvelope />
              </div>
              <h5 className="contact-us-box-title">Email</h5>
              <p className="contact-us-box-main"> santoshpolyfab@gmail.com</p>
              <p className="contact-us-box-desc">
                Send us your requirements and we’ll get back to you.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <div className="contact-us-box">
              <div className="contact-us-icon-box">
                <FaMapMarkerAlt />
              </div>
              <h5 className="contact-us-box-title">Address</h5>
              <p className="contact-us-box-main">
              Vill: Navadavan, Faridpur-243503. Bareilly (UP)
              </p>
              <p className="contact-us-box-desc">
                Visit our office for detailed discussions and meetings.
              </p>
            </div>
          </Col>
        </Row>

        {/* CONTACT FORM */}
        <div className="contact-us-form-wrapper">
          <ContactForm />
        </div>

        {/* GOOGLE MAP */}
        <div className="contact-us-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Bangalore%20Karnataka%20India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </section>
    </>
  );
};

export default ContactUs;
