import React from "react";
import "./style.css";
import SectionHeading from "../SectionHeading";
import TeachersCards from "./TeachersCards";

function OurTeachers() {
  return (
    <section className="our-teachers">
      <SectionHeading
        title="Certified Teachers"
        excerpt="Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country"
        width="shrink"
      />
      <TeachersCards />
    </section>
  );
}

export default OurTeachers;
