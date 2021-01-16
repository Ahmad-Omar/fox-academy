import React from "react";
import Statistics from "./Statistics";
import "./style.css";
import TextSide from "./TextSide";
import VideoSide from "./VideoSide";

function AboutAcademy() {
  return (
    <section className="about-academy">
      <div className="overlay"></div>
      <div className="wrapper">
        <div className="about-container">
          <VideoSide />
          <TextSide />
          <Statistics />
        </div>
      </div>
    </section>
  );
}

export default AboutAcademy;
