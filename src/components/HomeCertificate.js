import React from 'react'
import { Container } from 'react-bootstrap'

const HomeCertificate = () => {
  return (
       
      <section id="certificates" className="cert-div">
        <Container>
          <h3 className="cert-heading page-heading">Our Certifications & Standards</h3>

          <div className="cert-wrapper">
            <div className="cert-item">
              <img
                src={require("../assets/icons/iso2.png")}
                alt="ISO Certified"
              />
              <p>ISO 9001:2015</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/iso2.png")}
                alt="Quality Assured"
              />
              <p>ISO 14000:2015</p>
            </div>

            <div className="cert-item cert-item-epr">
              <img
                src={require("../assets/icons/uppc-epr.png")}
                alt="Eco Friendly"
              />
              <p>EPR</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/BIS.png")}
                alt="Trusted Manufacturer"
              />
              <p>BIS Cement IS 11652:2017</p>
            </div>

            <div className="cert-item">
              <img
                src={require("../assets/icons/BIS.png")}
                alt="Export Quality"
              />
              <p>BIS Sugar IS 14968:2015</p>
            </div>
          </div>
        </Container>
      </section>
  )
}

export default HomeCertificate