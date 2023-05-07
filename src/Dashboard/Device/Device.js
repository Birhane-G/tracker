import React from "react";
import "./style/devices.css";
import DeviceType from "./components/DeviceType";
import { DeviceBrand } from "./components/DeviceBrand";
import { DeviceModel } from "./components/DeviceModel";
import { ScreenResolution } from "./components/ScreenResolution";

function Device() {
  return (
    <div className="software-container">
      <div className="one">
        <DeviceBrand />
      </div>
      <div className="one">
        <DeviceModel />
      </div>
      <div className="one">
        <DeviceType />
      </div>
      <div className="one">
        <ScreenResolution />
      </div>
    </div>
  );
}

export default Device;
