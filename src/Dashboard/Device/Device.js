<<<<<<< HEAD
<<<<<<<< HEAD:src/Dashboard/Device/Device.js
import React from "react";
// import {PieChart,
//   Pie,
//   Tooltip,
//   BarChart,
//   XAxis,
//   YAxis,
//   Legend,
//   CartesianGrid,
//   Bar,
//  } from "recharts";

import "./style/device.css";

  const data = [
    { name: "Samsung", users: 70 },
    { name: "Apple", users: 550 },
    { name: "Huawei", users: 150 },
    { name: "Tecno", users: 400 },
  ];
function piechart(){
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        {/* <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart> */}
      </div>
    </div>
  );
};

 function Device() {
   return (
  
       <div className="Dashboard-include-content">
         <div className="dashboard-sidebar">
         </div>
         <div className="dashboard-content">
           <AllPageview />
         </div>
       </div>
  
   );
 }
 export function AllPageview() {
   return (
     <div className="cards-contents">
       <div className="device-cards">
         <div className="device type">
           <h1>Device type</h1>
           <div style={{ textAlign: "center" }}>
      <div className="App">
        {/* <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={130}
            outerRadius={100}
            fill="#00032c"
            label
          />
          <Tooltip />
        </PieChart> */}
        
      </div>
    </div>
         </div>
         <div className="device brand">
           <h1>Device brand</h1>
           <div>
            {/* <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart> */}
        </div>
         </div>
         <div className="device model">
           <h1>Device model</h1>
         </div>
         <div className="device screenResolution">
           <h1>Screen resolution</h1>       
          </div>
       </div>
     </div>
   );
 }

 export default Device;
========
>>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09:src/Dashboard/pages/Device.js
=======
import React from "react";
import "./style/software.css";
import DeviceType from "./components/DeviceType";
import { DeviceBrand } from "./components/DeviceBrand";
import { DeviceModel } from "./components/DeviceModel";
import { Plugin } from "./components/Plugin";

function Device() {
 
  return (
    <div className="software-container">
      <div className="one">
        <DeviceType />
      </div>
      <div className="one">
        <DeviceModel />
        
      </div>
      <div className="one">
        <DeviceBrand/>

      </div>
      <div className="one">
        <Plugin />
      </div>
    </div>
  );

};
export default Device;
>>>>>>> 9ee782e3abde1b9693c1bd7ffbd0567c26273a09
