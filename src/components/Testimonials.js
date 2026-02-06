import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';
import { Container } from 'react-bootstrap';

const Testimonials = () => {
const reviews = [
  {
    name: "",
    title: "",
    image: require("../assets/logo22.png"),
    text: "From our first strategy call to consistent monthly results, the team was highly responsive, data driven, and proactive. Their social media management and SEO efforts improved our visibility, engagement, and lead quality significantly."
  },
  {
    name: "",
    title: "",
    image: require("../assets/logo22.png"),
    text: "From our first strategy call to consistent monthly results, the team was highly responsive, data driven, and proactive. Their performance marketing campaigns delivered strong ROI and helped us scale leads across multiple channels."
  },
  {
    name: "",
    title: "",
      image: require("../assets/logo22.png"),
    text: "From our first strategy call to consistent monthly results, the team was highly responsive, data driven, and proactive. Their SEO and social media execution strengthened our brand presence and generated steady, qualified enquiries."
  },
];


  return (
    <Container fluid className="review-overlay-container">
      <div className="review-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev'
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className='review-box'>
                <img className='client-review-img' src={review.image} alt={review.name} />
                <p className="review-title ">{review.title}</p>
                <p className="page_text">“{review.text}"</p>
                <p className="review-name ">{review.name}</p>
                <div className="review-nav-btns">
                  <span className="custom-prev review-nav-btn"> &lt; </span>
                  <span className="custom-next review-nav-btn"> &gt; </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </Container>
  );
};

export default Testimonials;
