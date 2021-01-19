import React, { useState, useEffect } from "react";
import "./style.css";
import "firebase/firestore";
import { db } from "../../../firebase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteRoundedIcon from "@material-ui/icons/FormatQuoteRounded";

const settings = {
  className: "center",
  centerMode: true,
  dots: true,
  dotsClass: "custom-dots",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  autoplay: false,
  autoplaySpeed: 4000,
};

function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    db.collection("testimonials")
      .get()
      .then((querySnapshot) => {
        const getData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTestimonials(getData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="testimonials-slider">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div
            className="testimonial"
            key={testimonial.id}
            style={{ width: 540 }}
          >
            <div className="testi-left">
              <div className="testimonial-image">
                <img src={testimonial.img_url} alt="person-img" />
              </div>
            </div>
            <div className="testi-right">
              <div className="quote-icon">
                <FormatQuoteRoundedIcon />
              </div>
              <p className="testimonial-text">{testimonial.content}</p>
              <h4 className="testimonial-author">{testimonial.name}</h4>
              <p className="author-major">{testimonial.major}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
