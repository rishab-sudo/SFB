import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeProducts.css";

const products = [
  {
    id: 1,
    title: "Corrugated Boxes",
    subtitle: "Durable Packaging",
    image: require("../assets/Banner/sfb-demo-bg.jpg"),
    points: ["High Strength", "Eco Friendly", "Custom Sizes"],
  },
  {
    id: 2,
    title: "Mono Cartons",
    subtitle: "Premium Look",
 image: require("../assets/Banner/sfb-demo-bg.jpg"),
    points: ["Attractive Finish", "Lightweight", "Brand Focused"],
  },
  {
    id: 3,
    title: "Rigid Boxes",
    subtitle: "Luxury Packaging",
    image: require("../assets/Banner/sfb-demo-bg.jpg"),
    points: ["Strong Build", "Premium Feel", "Custom Design"],
  },
  {
    id: 4,
    title: "Printed Boxes",
    subtitle: "Brand Visibility",
    image: require("../assets/Banner/sfb-demo-bg.jpg"),
    points: ["High Quality Print", "Vibrant Colors", "Custom Artwork"],
  },
  {
    id: 5,
    title: "Eco Packaging",
    subtitle: "Sustainable Choice",
 image: require("../assets/Banner/sfb-demo-bg.jpg"),
    points: ["Recyclable", "Low Carbon", "Cost Effective"],
  },
];

const HomeProducts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="home-products">
      <Container>
        {/* HEADER */}
        <div className="home-products-header">
          <div>
            <span className="home-products-subtitle page-heading">Our Products</span>
            <h2 className="home-products-title page-large-heading">
              Explore Our Packaging Solutions
            </h2>
          </div>

          {/* ARROWS */}
          <div className="home-products-arrows">
            <button ref={prevRef} className="home-products-arrow">←</button>
            <button ref={nextRef} className="home-products-arrow">→</button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="home-product-slider">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {products.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="home-products-card">
                  {/* IMAGE */}
                  <div className="home-products-card-image">
                    <img src={item.image} alt={item.title} />

                    {/* HOVER OVERLAY */}
                    <div className="home-products-card-overlay">
                      <ul>
                        {item.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="home-products-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.subtitle}</p>
                    <a href="/products" className="home-products-readmore">
                      Read More →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HomeProducts;
