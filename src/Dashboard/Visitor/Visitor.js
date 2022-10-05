import React from "react";
import "./style/visitor.css"
import { Piechart } from "./components/Doughnutchart";
import { Visitorlog } from "./components/Visitorlog";
import { Channeltype } from "./components/Channeltype";

function Visitor() {
  return (
    <div className="Visitor-content">
      <div className="Visitor-contaner">
        <div className="Visitor-log">
          <Visitorlog />
        </div>
        <div className="Real-Time">
          <Piechart />
          <Channeltype />
        </div>
      </div>
    </div>
  );
}

export default Visitor;
