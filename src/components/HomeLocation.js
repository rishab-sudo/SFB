import React, { useState } from "react";
import "./HomeLocation.css";
import bgImage from "../assets/Banner/factory1.png";

const HomeLocation = () => {
  const [showDirections, setShowDirections] = useState(false);

  return (
    <section
      className="homeLocation"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="homeLocation-container">

        <div className="homeLocation-left">
          <h2>Visit Our Manufacturing Unit</h2>
          <p>
            We specialize in manufacturing high-quality PP Fabric and PP Bags
            designed to deliver durable and reliable packaging solutions.
          </p>
          <p>
            Visit our factory to explore our advanced production process and
            discover customized solutions for your business needs.
          </p>
        </div>

        <div className="homeLocation-right">
          <div className="map-container">

            {!showDirections ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9468582304517!2d79.55748887531833!3d28.178531575915635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ffb42d55f941d%3A0x6d9c386e52531212!2sSantosh%20Polyfab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1771049070375!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                title="map"
              ></iframe>
            ) : (
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.9468582304517!2d79.55748887531833!3d28.178531575915635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ffb42d55f941d%3A0x6d9c386e52531212!2sSantosh%20Polyfab%20Private%20Limited!5e0!3m2!1sen!2sin!4v1771049070375!5m2!1sen!2sin"
  width="100%"
  height="220"
  style={{ border: 0 }}
  loading="lazy"
  title="directions-map"
></iframe>
            )}

          </div>

          {/* <button
            className="direction-btn"
            onClick={() => setShowDirections(true)}
          >
            Get Directions
          </button> */}
        </div>

      </div>
    </section>
  );
};

export default HomeLocation;