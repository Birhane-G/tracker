import React from "react";
import Firefox from "../icons/browsers/FF.png";
import chrome from "../icons/browsers/CF.png";
import opera from "../icons/browsers/OH.png";
import IE from "../icons/browsers/IE.png";

const Browser = () => {
  return (
    <div className="Browser-container">
      <div className="Browser-title">
        <h3>Browser</h3>
      </div>
      <div className="Browser-data">
        <table cellSpacing={0} cellPadding={0} className="Browser-data-table">
          <thead>
            <tr>
              <th>Browser</th>
              <th>Visitors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Firefox} className="icons"/> Firefox
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={chrome} className="icons"/> chrome
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={opera} className="icons"/> opera
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                <img src={IE} className="icons"/> Internet Explore
              </td>
              <td>1200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Browser;
