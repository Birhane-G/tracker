import React from "react";
import { Sidebar } from "./Dashboard";
import {LineChart, CartesianGrid, XAxis, 
        YAxis, Tooltip, Legend, Line } from "recharts"
        
import "../style/pageview.css";
const data = [
  {
    "date": 11-10-2022,
    "Avg page load Time": 4000,
    "Avg Network Time": 2400,
    "Avg Completion Time": 2400
  },
  {
    "date": 11-10-2022,
    "Avg page load Time": 3000,
    "Avg Network Time": 1398,
    "Avg Completion Time": 2210
  },
  {
    "date": 11-10-2022,
    "Avg page load Time": 2000,
    "Avg Network Time": 9800,
    "Avg Completion Time": 2290
  },
  {
    "date": 11-10-2022,
    "Avg page load Time": 2780,
    "Avg Network Time": 3908,
    "Avg Completion Time": 2000
  },
  {
    "date": 11-10-2022,
    "Avg page load Time": 1890,
    "Avg Network Time": 4800,
    "Avg Completion Time": 2181
  },
  {
    "date": 11-10-2022,
    "Avg page load Time": 2390,
    "Avg Network Time": 3800,
    "Avg Completion Time": 2500
  },
  {
    "name": "Page G",
    "Avg page load Time": 3490,
    "Avg Network Time": 4300,
    "Avg Completion Time": 2100
  }
]
function Pageview() {
  return (
    <>
      <div className="Dashboard-include-content">
        <div className="dashboard-sidebar">
          <Sidebar />
        </div>
        <div className="dashboard-content">
          <AllPageview />
        </div>
      </div>
    </>
  );
}
export function AllPageview() {
  return (
    <div className="pageview">
      <div className="pageview-content">
        <div className="pageview-overview">
          <LineChart
            width={900}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="7 1" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Avg page load Time" stroke="#8884d8" />
            <Line type="monotone" dataKey="Avg Network Time" stroke="#82ca9d" />
            <Line type="monotone" dataKey="Avg Completion Time" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
export default Pageview;
