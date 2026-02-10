import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./OurCustomers.css";

const customers = [
  { name: "J.K. Cement Works", img: require("../assets/icons/factory-vector.png"), tag: "Understanding your needs." },
  { name: "Wonder Cement Ltd", img: require("../assets/icons/factory-vector.png"), tag: "Efficient production strategy." },
  { name: "Heidelbergcement India Ltd", img: require("../assets/icons/factory-vector.png"), tag: "Adhering to high standards." },
  { name: "L.H. Sugar Factories Ltd.", img: require("../assets/icons/factory-vector.png"), tag: "Reliable supply partner." },
  { name: "Dhampur Sugar Mills Ltd.", img: require("../assets/icons/factory-vector.png"), tag: "On-time logistics & service." },
  { name: "Dhampur Bio Organics Ltd.", img: require("../assets/icons/factory-vector.png"), tag: "Quality-driven manufacturing." },
  { name: "Dwarikesh Sugar Industries Ltd.", img: require("../assets/icons/factory-vector.png"), tag: "Trusted industry collaboration." },
  { name: "Shubham Goldie Masale Pvt. Ltd.", img: require("../assets/icons/factory-vector.png"), tag: "Consistent packaging solutions." },
];

const OurCustomers = () => {
  return (
    <section className="customer">
      <Container>
        <h2 className="customer-heading page-heading">Our Customers</h2>
<p className="page-large-heading">We are proud to serve leading brands</p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
          className="customer-slider"
        >
          {customers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="customer-card">
                {/* TOP PART */}
                <div className="customer-card-top">
                  <div className="customer-logo">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <h6 className="customer-name">{item.name}</h6>
                </div>

                {/* DIVIDER */}
                <div className="customer-divider"></div>

                {/* BOTTOM TAGLINE */}
                <p className="customer-tagline">{item.tag}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default OurCustomers;
