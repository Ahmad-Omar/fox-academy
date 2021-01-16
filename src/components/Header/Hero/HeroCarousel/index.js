import React from "react";
import "./style.css";
import Slider from "react-slick";
import MainButton from "../../../MainButton";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyle = makeStyles({
  root: {
    "&.slick-initialized .slick-slide": {
      height: "100vh",
    },
  },
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slideToScroll: 1,
  dotsClass: "custom-dots slider-dots",
  autoplay: true,
  autoplaySpeed: 5000,
};

function HeroCaousel() {
  const classes = useStyle();
  return (
    <div className="carousel-items">
      <Slider {...settings} className={classes.root}>
        <div className="item item1">
          <div className="overlay"></div>
          <div className="wrapper">
            <div className="item-container">
              <div className="item_details">
                <h1 className="carousel__item__title">
                  Education Needs Complete Solution
                </h1>
                <p className="carousel__item__excerpt">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <Link to="/contact">
                  <MainButton text="Contact Us" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="item item2">
          <div className="overlay"></div>
          <div className="wrapper">
            <div className="item-container">
              <div className="item_details">
                <h1 className="carousel__item__title">
                  University, College School Education
                </h1>
                <p className="carousel__item__excerpt">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <MainButton text="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default HeroCaousel;
