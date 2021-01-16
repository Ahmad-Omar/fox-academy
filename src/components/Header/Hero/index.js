import React from "react";
import HeroCaousel from "./HeroCarousel";
import SignupForm from "./SignupForm";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <HeroCaousel />
        <SignupForm />
      </div>
    </section>
  );
}

export default Hero;
