import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/CardList";
import BikeList from "./components/BikeList";
import SliderComp from "./components/SliderComp";

function App() {
  return (
    <>
      <div className="">
        <div className="component">
          <h1>react carousel components</h1>
          <div className="topHeading">Featured New Cars</div>
        </div>
        <div>
          <CardList></CardList>
        </div>
        <div>{/* <BikeList></BikeList> */}</div>
        <SliderComp />
      </div>
    </>
  );
}

export default App;
