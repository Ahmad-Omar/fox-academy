import React from "react";
import "./style.css";
import SectionHeading from "../SectionHeading";
import CoursesCards from "./CoursesCards";

function OurCourses() {
  return (
    <section className="our-courses">
      <SectionHeading
        title="Our Courses"
        excerpt="Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country"
      />
      <CoursesCards />
    </section>
  );
}

export default OurCourses;
