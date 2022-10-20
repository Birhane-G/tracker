import React from "react";
import Et from "../icons/flags/et.png";
export const Visitorlog = () => {
  return (
    <div className="table-title">
      <h3>Visitor log</h3>
      <div className="visitor-log-Content">
        <div className="Left">
          <div className="Country-Name">
            <img src={Et} alt="" />
            <h4>Ethiopia</h4>
          </div>
          <div className="Channel-Type">
            <h4>Direct Entry</h4>
          </div>
          <div className="IP-Address">
            <h4>Ip: 127.0.0.0</h4>
          </div>
          <div className="Date">
            <h4>wednesday, october 19,2022</h4>
          </div>
          <div className="Time">
            <h4>18.11.10</h4>
          </div>
        </div>
        <div className="Right">

        </div>
      </div>
    </div>
  );
};
