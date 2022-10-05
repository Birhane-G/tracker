import React from "react";
import "./style/software.css";
import DeviceType from "./components/DeviceType";
import { DeviceBrand } from "./components/DeviceBrand";
import { DeviceModel } from "./components/DeviceModel";
import { Plugin } from "./components/Plugin";

function Device() {
 
  return (
    <div className="software-container">
      <div className="one">
        <DeviceType />
      </div>
      <div className="one">
        <DeviceModel />
        
      </div>
      <div className="one">
        <DeviceBrand/>

      </div>
      <div className="one">
        <Plugin />
      </div>
    </div>
  );

};
export default Device;
