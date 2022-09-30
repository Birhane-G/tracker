import React from 'react'
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "../../style/chart.css"
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
          backgroundColor: ["#10dc92", "#10dg92"],
          borderColor: "#dc105a",
          data: [4567,2400],
        },
      ],
    };
  return (
    <div className='real-time-visitor-pie-chart'>
          <div className='real-time-text'>
            <h3>Last 24 hours</h3>
          </div>
        <Pie data={data} />
    </div>
  );
};