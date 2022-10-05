import React from 'react'
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

export const Piechart = () => {
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
          data: [4567,2400],
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