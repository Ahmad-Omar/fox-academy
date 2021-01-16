import React from "react";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSlider from "./TestimonialsSlider";
import SectionHeading from "../SectionHeading";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="wrapper">
        <SectionHeading
          title="Student Says About Us"
          excerpt="Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country"
          width="shrink"
        />
        <TestimonialsSlider />
      </div>
    </section>
  );
}

export default Testimonials;
