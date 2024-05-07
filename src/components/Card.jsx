import React from "react";
import "slick-carousel/slick/slick.css";

const Card = (props) => {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h7>{props.name}</h7>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
};

export default Card;
