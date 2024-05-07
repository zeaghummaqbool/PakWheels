import React from "react";
import { Vdata } from "../store/cardslider.store";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BikeList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const card = Vdata.map((item) => (
    <Card name={item.title} url={item.img} price={item.price} />
  ));
  return (
    <div className="slidContainer">
      <Slider {...settings}>{card}</Slider>
    </div>
  );
};

export default BikeList;
