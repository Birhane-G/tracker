import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

import "../style/pageview.css";
const data = [
  {
    date: 2022,
    time: 1,
    "Avg page load Time": 0.1,
    "Avg Network Time": 0.5,
    "Avg Completion Time": 0.18,
  },
  {
    date: 2022,
    time: 1.4,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.25,
    "Avg Completion Time": 0.14,
  },
  {
    date: 2022,
    time: 1.2,
    "Avg page load Time": 0.14,
    "Avg Network Time": 0.4,
    "Avg Completion Time": 0.19,
  },
  {
    date: 2022,
    time: 1,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.1,
    "Avg Completion Time": 0.3,
  },
  {
    date: 2022,
    time: 0.9,
    "Avg page load Time": 0.1,
    "Avg Network Time": 0.3,
    "Avg Completion Time": 0.37,
  },
  {
    date: 2022,
    time: 1,
    "Avg page load Time": 0.04,
    "Avg Network Time": 0.2,
    "Avg Completion Time": 0.4,
  },
  {
    date: 2022,
    time: 0.4,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.15,
    "Avg Completion Time": 0.32,
  },
  {
    date: 2022,
    time: 0.2,
    "Avg page load Time": 0.23,
    "Avg Network Time": 0.3,
    "Avg Completion Time": 0.2,
  },
  {
    date: 2022,
    time: 0.1,
    "Avg page load Time": 0.12,
    "Avg Network Time": 0.24,
    "Avg Completion Time": 0.16,
  },
  {
    date: 2022,
    time: 1,
    "Avg page load Time": 0.08,
    "Avg Network Time": 0.2,
    "Avg Completion Time": 0.16,
  },
  {
    date: 2022,
    time: 0.2,
    "Avg page load Time": 0.15,
    "Avg Network Time": 0.22,
    "Avg Completion Time": 0.3,
  },
];
function Pageview() {
  return (
      <div className="pageview-include-content">
          <PageViewPerformance />
          <div className="other-contents">
            <PageView />
            <Other />
        </div>
      </div>
  );
}
export function PageViewPerformance() {
  return (
    <div className="pageview">
      <div className="pageview-content">
        <div className="pageview-overview">
          <div className="text">
            <h3>Page View Performance</h3>
          </div>
          <div className="data">
            <ResponsiveContainer height={125}>
              <LineChart
                data={data}
                margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="7 1" />
                <XAxis dataKey="date" />
                <YAxis dataKey="time" />
                <Tooltip style={{ x: 0, y: 0, width: 100, height: 50 }} />
                <Legend />
                <Line type="" dataKey="Avg page load Time" stroke="#8884d8" />
                <Line type="" dataKey="Avg Network Time" stroke="#82ca9d" />
                <Line type="" dataKey="Avg Completion Time" stroke=" #FF5733" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageView() {
  return (
    <div className="individual-pageview">
      <h3>PageView</h3>
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
