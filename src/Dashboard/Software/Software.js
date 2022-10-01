import React from "react";
import "./style/software.css";
import Browser from "./components/Browser";
import {OperatingS} from "./components/OperatingS";


export const Software = () => {
  return (
    <div className="software-container">
      <div className="one">
        <Browser />
      </div>
      <div className="one">
        <OperatingS />
      </div>
      <div className="one"></div>
      <div className="one"></div>
    </div>
  );
};
