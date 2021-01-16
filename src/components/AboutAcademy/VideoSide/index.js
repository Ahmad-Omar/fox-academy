import React from "react";
import "./style.css";
import aboutimage from "../../../assets/images/about.jpg";

function VideoSide() {
  return (
    <div className="video-side">
      <img src={aboutimage} alt="aboutimg" />
    </div>
  );
}

export default VideoSide;
