import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./OurCustomers.css";

const customers = [
  { name: "J.K. Cement Works", logo: "/customers/jk-cement.png", tag: "Understanding your needs." },
  { name: "Wonder Cement Limited", logo: "/customers/wonder-cement.png", tag: "Efficient production strategy." },
  { name: "Heidelbergcement India Limited", logo: "/customers/heidelberg.png", tag: "Adhering to high standards." },
  { name: "L.H. Sugar Factories Ltd.", logo: "/customers/lh-sugar.png", tag: "Reliable supply partner." },
  { name: "Dhampur Sugar Mills Ltd.", logo: "/customers/dhampur-sugar.png", tag: "On-time logistics & service." },
  { name: "Dhampur Bio Organics Ltd.", logo: "/customers/dhampur-bio.png", tag: "Quality-driven manufacturing." },
  { name: "Dwarikesh Sugar Industries Ltd.", logo: "/customers/dwarikesh.png", tag: "Trusted industry collaboration." },
  { name: "Shubham Goldie Masale Pvt. Ltd.", logo: "/customers/shubham-goldie.png", tag: "Consistent packaging solutions." },
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
                    <img src={item.logo} alt={item.name} />
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
