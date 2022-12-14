import React from "react";
import "./style/software.css";
import Browser from "./components/Browser";
import { OperatingS } from "./components/OperatingS";
import { Engine } from "./components/Engine";
import { Plugin } from "./components/Plugin";

export const Software = () => {
  return (
    <div className="software-container">
      <div className="one">
        <Browser />
      </div>
      <div className="one">
        <OperatingS />
      </div>
      <div className="one">
        <Engine />
      </div>
      <div className="one">
        <Plugin />
      </div>
    </div>
  );
};
