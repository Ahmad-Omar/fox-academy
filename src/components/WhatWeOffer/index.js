import React from "react";
import "./style.css";
import image from "../../assets/images/whatweoffer.jpg";
import SectionHeading from "../SectionHeading";
import FeaturesList from "./FeaturesList";

function WhatWeOffer() {
  return (
    <section className="whatweoffer">
      <div className="wrapper">
        <div className="whatweoffer-container">
          <div className="left-side">
            <SectionHeading
              title="What We Offer"
              excerpt="On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word."
              align="left"
              titleSize="32px"
              titleWeight="500"
            />
            <FeaturesList />
          </div>

          <div className="right-side">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
