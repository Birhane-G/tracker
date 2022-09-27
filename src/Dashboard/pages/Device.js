import React from "react";
import { Sidebar } from "./Dashboard";


import "../style/device.css";

  const data = [
    { name: "Samsung", users: 70 },
    { name: "Apple", users: 550 },
    { name: "Huawei", users: 150 },
    { name: "Tecno", users: 400 },
  ];
function piechart(){
  return (

      </div>
    </div>
  );

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
