import React from "react";
import Desktop from "../icons/devices/desktop.png";
import Smartphone from "../icons/devices/smartphone.png";
import Tablet from "../icons/devices/tablet.png";
import Wearable from "../icons/devices/wearable.png";
import Peripheral from "../icons/devices/peripheral.png"
import Car_browser from "../icons/devices/car_browser.png"
import Unknown from "../icons/devices/unknown.png"
const DeviceType = () => {
  return (
    <div className="Browser-container">
      <div className="table-title">
        <h3>Device Type</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Devices</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Smartphone} alt="" className="icons"/>  Smartphone
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={Desktop} alt="" className="icons"/>  Desktop
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={Tablet} alt="" className="icons"/>  Tablet
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={Wearable} alt="" className="icons"/>  Wearable
              </td>
              <td>1200</td>
            </tr>
              <tr>
              <td>
                <img src={Peripheral} alt="" className="icons"/>  Peripheral
              </td>
              <td>1200</td>
            </tr>
              <tr>
              <td>
                <img src={Car_browser} alt="" className="icons"/>  Car Browser
              </td>
              <td>1200</td>
            </tr>
              <tr>
              <td>
                <img src={Unknown} alt="" className="icons"/>  Unknown
              </td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceType;
