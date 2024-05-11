import React from "react";
import CardList from "../CardList";
import styles from "./ManageComp.module.css";

const ManageComp = () => {
  return (
    <div className={styles.SliderComp}>
      <div className="Slidwrap">
        <div className={styles.topHeading}>Managed by PakWheels</div>
        <div className="slid">
          <CardList />
        </div>
        <div className={styles.textbotm}>
          View All Managed By Pakwheels Cars
        </div>
      </div>
    </div>
  );
};

export default ManageComp;
