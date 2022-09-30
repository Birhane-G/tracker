import React from "react";
import "../style/visitor.css";
import { Piechart } from "../Charts/Visitor/Piechart";

function Visitor() {
  return (
    <div className="Visitor-content">
      <div className="Visitor-contaner">
        <div className="Visitor-log">
          <Visitorlog />
        </div>
        <div className="Real-Time">
          <Piechart />
          <ChanalType />
        </div>
      </div>
    </div>
  );
}

export const ChanalType = () => {
  return (
    <div className="Visitor-Channel-type">
      <div>
        <h3>Channel Type</h3>
      </div>
      <div>
        <table className="channel-type-table">
          <thead>
            <tr>
              <th>Channel</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google</td>
              <td>200</td>
            </tr>
            <tr>
              <td>linkedin</td>
              <td>300</td>
            </tr>
            <tr>
              <td>facebook</td>
              <td>200</td>
            </tr>
            <tr>
              <td>instagram</td>
              <td>200</td>
            </tr>
            <tr>
              <td>reddit</td>
              <td>200</td>
            </tr>
            <tr>
              <td>twitter</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const Visitorlog = () => {
  return <div>Visitor log</div>;
};

export default Visitor;
