import React from "react";
import { Piechart } from "./Piechart";
export const Engine = () => {
  return (
    <div className="engin-container">
      <div className="table-title">
        <h3>Browser Engines</h3>
      </div>
      <div className="engin-data">
        <Piechart />
      </div>
    </div>
  );
};
