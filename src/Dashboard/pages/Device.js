import React from "react";
import Sidebar from "../inc/Sidebar";

import "../style/device.css";
function Device() {
  return (
    <>
      <div className="Cards">
        <Sidebar />
        <div className="cards-contents">
          <div className="device-cards">
            <div className="device type">
              <h1>Device type</h1>
            </div>
            <div className="device brand">
              <h1>Device brand</h1>
            </div>
            <div className="device model">
              <h1>Device model</h1>
            </div>
            <div className="device screenResolution">
              <h1>Screen resolution</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export function AllPageview() {
  return (
    <div className="cards">
      <div className="device type">
        <h1>Device type</h1>
      </div>
      <div className="device brand">
        <h1>Device brand</h1>
      </div>
      <div className="device model">
        <h1>Device model</h1>
      </div>
      <div className="device screenResolution">
        <h1>Screen resolution</h1>
      </div>
    </div>
  );
}
export default Device;
