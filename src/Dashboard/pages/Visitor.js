import React from "react";
import "../style/visitor.css";
// import { PieChart, Pie, ResponsiveContainer, Tooltip } from "recharts";
function Visitor() {
  return (
    <div className="Visitor-content">
      <h1>Visitor page</h1>
      <div className="Visitor-contaner">
        <div className="Visitor-Real-time"></div>
        <RealTime />
      </div>
    </div>
  );
}
function RealTime() {
  // const data02 = [
  //   {
  //     name: "Actions",
  //     value: 2400,
  //   },
  //   {
  //     name: "Visits",
  //     value: 4567,
  //   },
  // ];
  return (
    <div className="Real-Time">
      <div>
        <div>
          <h3>Last 24 hours</h3>
        </div>
        <div>
          {/* <ResponsiveContainer height={200}>
            <PieChart width={350}>
              <Tooltip />
              <Pie
                data={data02}
                cx="50%"
                cy="50%"
                innerRadius={35}
                fill="#82ca9d"
                // fillOpacity={0.6}
                label
              />
            </PieChart>
          </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
}
export default Visitor;
