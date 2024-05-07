import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardList from "./components/CardList";
import BikeList from "./components/BikeList";

function App() {
  return (
    <>
      <div className="">
        <div className="component">
          <h1>react carousel components</h1>
          <span className="topHeading">Featured New Cars</span>
        </div>
        <div>
          <CardList></CardList>
        </div>
        <div>
          <BikeList></BikeList>
        </div>
      </div>
    </>
  );
}

export default App;
