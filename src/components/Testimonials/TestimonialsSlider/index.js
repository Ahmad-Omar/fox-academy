import React from "react";
import "./style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person1 from "../../../assets/images/teachers/teacher-1.jpg";
import person2 from "../../../assets/images/teachers/teacher-2.jpg";
import person3 from "../../../assets/images/teachers/teacher-3.jpg";
import person4 from "../../../assets/images/teachers/teacher-4.jpg";
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
  return (
    <div className="testimonials-slider">
      <Slider {...settings}>
        <div className="testimonial" style={{ width: 540 }}>
          <div className="testi-left">
            <div className="testimonial-image">
              <img src={person1} alt="person-img" />
            </div>
          </div>
          <div className="testi-right">
            <div className="quote-icon">
              <FormatQuoteRoundedIcon />
            </div>
            <p className="testimonial-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <h4 className="testimonial-author">Racky Henderson</h4>
            <p className="author-major">Electric Engineering</p>
          </div>
        </div>
        <div className="testimonial" style={{ width: 540 }}>
          <div className="testi-left">
            <div className="testimonial-image">
              <img src={person2} alt="person-img" />
            </div>
          </div>
          <div className="testi-right">
            <div className="quote-icon">
              <FormatQuoteRoundedIcon />
            </div>
            <p className="testimonial-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <h4 className="testimonial-author">Racky Henderson</h4>
            <p className="author-major">Computer Engineering</p>
          </div>
        </div>
        <div className="testimonial" style={{ width: 540 }}>
          <div className="testi-left">
            <div className="testimonial-image">
              <img src={person3} alt="person-img" />
            </div>
          </div>
          <div className="testi-right">
            <div className="quote-icon">
              <FormatQuoteRoundedIcon />
            </div>
            <p className="testimonial-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <h4 className="testimonial-author">Racky Henderson</h4>
            <p className="author-major">Insdustrial Engineering</p>
          </div>
        </div>
        <div className="testimonial" style={{ width: 540 }}>
          <div className="testi-left">
            <div className="testimonial-image">
              <img src={person4} alt="person-img" />
            </div>
          </div>
          <div className="testi-right">
            <div className="quote-icon">
              <FormatQuoteRoundedIcon />
            </div>
            <p className="testimonial-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <h4 className="testimonial-author">Racky Henderson</h4>
            <p className="author-major">Civil Engineering</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default TestimonialsSlider;
