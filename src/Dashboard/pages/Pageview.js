import React from "react";
import "../style/pageview.css";
import LineChart from "../Charts/pageView/LineChart";

function Pageview() {
  return (
    <div className="pageview-content">
      <LineChart />
      <div className="other-contents">
        <PageView />
        <Other />
      </div>
    </div>
  );
}
function PageView() {
  return (
    <div className="pageview-include-content">
      <div className="pageview-title">
        <h3>PageView</h3>
        </div>
        <table className="pageview-table">
          <thead className="table-header">
            <tr>
              <th>Page Url</th>
              <th>Pageview</th>
              <th>Unique Pageview</th>
              <th>Bounce Rate</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>/index</td>
              <td>400</td>
              <td>100</td>
              <td>40%</td>
            </tr>
          </tbody>
        </table>
     
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
