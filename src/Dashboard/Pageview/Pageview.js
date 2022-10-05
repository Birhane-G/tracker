import React from "react";
import "./style/pageview.css";
import LineChart from "./Components/LineChart";
import { Ipageview } from "./Components/Ipageview";

function Pageview() {
  return (
    <div className="pageview-content">
      <LineChart />
      <div className="other-contents">
        <Ipageview />
        <Other />
      </div>
    </div>
  );
}

function Other() {
  return (
    <div className="other">
      <div className="otherone"></div>
      <div className="otherone"></div>
    </div>
  );
}

export default Pageview;
