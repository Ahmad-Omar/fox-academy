import React from "react";
import AboutAcademy from "../../components/AboutAcademy";
import Hero from "../../components/Header/Hero";
// import HeroBoxes from "../../components/Header/Hero/HeroBoxes";
import OurCourses from "../../components/OurCourses";
import OurTeachers from "../../components/OurTeachers";
import Quote from "../../components/Quote";
import RecentBlog from "../../components/RecentBlog";
import Testimonials from "../../components/Testimonials";
import WhatWeOffer from "../../components/WhatWeOffer";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      {/* <HeroBoxes /> */}
      <WhatWeOffer />
      <AboutAcademy />
      <OurCourses />
      <OurTeachers />
      <Quote />
      <RecentBlog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;
