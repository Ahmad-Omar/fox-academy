import React from "react";
import "./style.css";

function SectionHeading(props) {
  const { title, excerpt, color, align, width, titleSize, titleWeight } = props;
  return (
    <div
      className={`section-heading ${width === "shrink" ? "custom-width" : ""}`}
      style={{ textAlign: align }}
    >
      <h2
        className="section-title"
        style={{ color: color, fontSize: titleSize, fontWeight: titleWeight }}
      >
        {title}
      </h2>
      <p className="section-excerpt" style={{ color: color }}>
        {excerpt}
      </p>
    </div>
  );
}

export default SectionHeading;
