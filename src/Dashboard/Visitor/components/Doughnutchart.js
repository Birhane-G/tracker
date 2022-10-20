import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Piechart = () => {
  const [Live, setLive] = useState([]);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/Live").then((result) => {
      if (result.data.status === 200) {
        setLive(result.data.value);
      }
    });
  }, []);
  var Actions = [
     Live.map((item) => {
      return item.actions;
    }),
  ];
  var Visits = [
    Live.map((item) => {
     return item.visits;
   }),
 ];
    const labels = [
      "Actions",
      "Visits",
    ];
  
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Visits",
          backgroundColor: ["#8db9fa", "#00032c"],
          borderColor:[ "#00032c", "#00032c"],
          data: [Actions,Visits],
        },
      ],
    };
  return (
    <div className='real-time-visitor-pie-chart'>
          <div className='table-title'>
            <h3>Last 30m</h3>
          </div>
        <Doughnut data={data} />
    </div>
  );
};