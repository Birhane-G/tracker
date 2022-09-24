import React from "react";
import { Sidebar } from "./Dashboard";
import {LineChart, CartesianGrid, XAxis, 
        YAxis, Tooltip, Legend, Line } from "recharts"
        
import "../style/pageview.css";
const data = [
  {
    "date": 2022,
    "time": 1,
    "Avg page load Time": 0.1,
    "Avg Network Time": 0.5,
    "Avg Completion Time": 0.18
  },
  {
    "date": 2022,
    "time": 2,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.25,
    "Avg Completion Time": 0.14
  },
  {
    "date": 2022,
    "time": 2,
    "Avg page load Time": 0.14,
    "Avg Network Time": 0.4,
    "Avg Completion Time": 0.19
  },
  {
    "date": 2022,
    "time": 1,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.1,
    "Avg Completion Time": 0.3
  },
  {
    "date": 2022,
    "time": 2,
    "Avg page load Time": 0.1,
    "Avg Network Time": 0.3,
    "Avg Completion Time": 0.37
  },
  {
    "date": 2022,
    "time": 1,
    "Avg page load Time": 0.04,
    "Avg Network Time": 0.2,
    "Avg Completion Time": 0.4
  },
  {
    "date": 2022,
    "time": 0.4,
    "Avg page load Time": 0.2,
    "Avg Network Time": 0.15,
    "Avg Completion Time": 0.32
  },
  {
    "date": 2022,
    "time": 0.2,
    "Avg page load Time": 0.23,
    "Avg Network Time": 0.3,
    "Avg Completion Time": 0.2
  },
  {
    "date": 2022,
    "time": 0.1,
    "Avg page load Time": 0.12,
    "Avg Network Time": 0.24,
    "Avg Completion Time": 0.16
  },
  {
    "date": 2022,
    "time": 1,
    "Avg page load Time": 0.08,
    "Avg Network Time": 0.2,
    "Avg Completion Time": 0.16
  },
  {
    "date": 2022,
    "time": 2,
    "Avg page load Time": 0.15,
    "Avg Network Time": 0.22,
    "Avg Completion Time": 0.3
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
            // margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="7 1" />
            <XAxis dataKey="date" />
            <YAxis dataKey="time" />
            <Tooltip color="#FF5733"/>
            <Legend />
            <Line type="" dataKey="Avg page load Time" stroke="#8884d8" />
            <Line type="" dataKey="Avg Network Time" stroke="#82ca9d" />
            <Line type="" dataKey="Avg Completion Time" stroke=" #FF5733" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
export default Pageview;
