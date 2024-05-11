import React from "react";
import { Vdata, responsive } from "../store/cardslider.store";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

const CardList = () => {
  const card = Vdata.map((item) => (
    <Card name={item.title} url={item.img} price={item.price} />
  ));
  return (
    <>
      <div>
        <Carousel responsive={responsive}>{card}</Carousel>
      </div>
    </>
  );
};

export default CardList;
