import React from "react";
import CardList from "./CardList";

const SliderComp = () => {
  return (
    <div className="SliderComp">
      <div className="Slidwrap">
        <div className="topHeading">Featured New Cars</div>

        <div className="slid">
          <CardList />
        </div>
        <div className="textbotm">View All Managed By Pakwheels Cars</div>
      </div>
    </div>
  );
};

export default SliderComp;
