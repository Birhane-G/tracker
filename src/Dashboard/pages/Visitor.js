import React from "react";
import "../style/visitor.css";
import { Piechart } from "../Charts/Visitor/Piechart";

function Visitor() {
  return (
    <div className="Visitor-content">
      <h1>Visitor page</h1>
      <div className="Visitor-contaner">
        <div className="Visitor-Real-time"></div>
        <div className="Real-Time">
          <Piechart />
        </div>
      </div>
    </div>
  );
}

export default Visitor;
