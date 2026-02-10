import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "./Achievements.css";

const achvData = [
  {
    id: 1,
    value: "10000 MT",
    label: "Fabric Production Capacity / Year",
    img: require("../assets/icons/p1-blue.png"),
  },
  {
    id: 2,
    value: "12 Crore",
    label: "Bags Production Capacity / Year",
    img: require("../assets/icons/p2-blue.png"),
  },
  {
    id: 3,
    value: "1200 MT",
    label: "Yarn Production Capacity / Year",
     img: require("../assets/icons/p3-blue.png"),
  },
  {
    id: 4,
    value: "220000 Sq.Ft",
    label: "Manufacturing Area",
     img: require("../assets/icons/manuf-blue.png"),
  },
  {
    id: 5,
    value: "1.5 MW",
    label: "Captive Solar Plant",
      img: require("../assets/icons/solar-blue.png"),
  },
  {
    id: 6,
    value: "9+ Years",
    label: "Industry Experience",
    img: require("../assets/icons/indust-blue.png"),
  },
  {
    id: 7,
    value: "150+",
    label: "Varieties of Production",
      img: require("../assets/icons/varity-blue.png"),
  },
];

const Achievements = () => {
  return (
    <Container fluid className="achv-fluid">
      <Container className="achv">
        {/* HEADER */}
        <div className="achv-header">
          <h2 className="achv-heading page-heading">Our Achievements</h2>
          <p className="achv-subheading page-large-heading">
            Delivering excellence through numbers that reflect our capabilities.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
        >
          {achvData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="achv-box">
                <div className="achv-icon-circle">
                  <img src={item.img} alt={item.label} />
                </div>
                <div className="achv-box-content">
                  <h5>{item.value}</h5>
                  <p>{item.label}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Container>
  );
};

export default Achievements;
