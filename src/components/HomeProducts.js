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
    title: "PP Fabric",
    subtitle: "Customized Industrial Fabric",
    image: require("../assets/Products/PPFabricRoll.jpg"),
    link: "/products/pp-fabric",
    points: [
      "Available in woven, laminated & unlaminated types",
      "Fully customizable: size, GSM, color, mesh & UV resistance",
      "Widely used for sacks, wrapping & industrial packaging",
      "Recyclable and eco-friendly material",
    ],
  },
  {
    id: 2,
    title: "PP Bags",
    subtitle: "Strong & Reliable Packaging",
    image: require("../assets/Products/pp-bags-ai.png"),
    link: "/products/pp-bags",
    points: [
      "Laminated, unlaminated & recycled bags available",
      "Used in cement, sugar, flour, rice & food grain industries",
      "High load-bearing strength and durable stitching",
      "Reusable and 100% recyclable polypropylene material",
    ],
  },
  {
    id: 3,
    title: "Monolayer Films",
    subtitle: "Protective PE Liners & Films",
    image: require("../assets/Products/monolayer1.png"),
    link: "/products/monolayer-films",
    points: [
      "Provides oxygen & moisture barrier protection",
      "Chemical resistant and anti-static properties",
      "High tensile strength with minimal handling required",
      "Custom sizes and materials as per application",
    ],
  },
  {
    id: 4,
    title: "Multifilament Yarn",
    subtitle: "High Strength Industrial Yarn",
    image: require("../assets/Products/multifilamnet-yarn(1).jpeg"),
    link: "/products/multifilament-yarn",
    points: [
      "High strength, smooth finish and consistent quality",
      "Used for sewing, weaving, braiding & bag closing",
      "Available in multiple colors with medium & high tenacity",
      "Suitable for ropes, nets, slings, webbing & filtration",
    ],
  },
  {
    id: 5,
    title: "Reprocess Granules",
    subtitle: "Sustainable Raw Material",
    image: require("../assets/Products/granules1.png"),
    link: "/products/reprocess-granules",
    points: [
      "Made from recycled waste to support circular economy",
      "Used in manufacturing PP fabric and PP bags",
      "Available in multiple colors and MFI as per requirement",
      "Cost-effective and eco-friendly material solution",
    ],
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
                    <h4 className="home-products-h4">{item.title}</h4>
                    <p className="home-products-p">{item.subtitle}</p>
                 <div className="w-100 home-products-readmore">  
                  <a href={item.link} className="">
                      Read More →
                    </a>
                    </div> 
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
