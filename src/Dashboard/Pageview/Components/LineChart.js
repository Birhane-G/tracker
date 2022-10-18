import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const LineChart = () => {
  const [Plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/").then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setPlugins(result.data.value);
      }
    });
  }, []);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Avg page load Time",
        backgroundColor: "#dc105a",
        borderColor: "#dc105a",
        data: [0.15, 0.2, 0.7, 0.4, 1, 0.77, 0.57],
      },
      {
        label: "Avg Network Time",
        backgroundColor: "#0f48db",
        borderColor: "#0f48db",
        data: [0.5, 0.2, 0.66, 0.1, 0.8, 0.7, 0.24],
      },
      {
        label: "Avg Completion Time",
        backgroundColor: "#38db0f",
        borderColor: "#38db0f",
        data: [0.2, 0.9, 0.55, 0.29, 0.6, 0.9, 0.02],
      },
    ],
  };
  return (
    <div className="page-performance-line-chart">
      <div className="table-title">
        <h3>page performance</h3>
      </div>
      <div className="page-performance-data">
        </div>
      <Line width={"10%"} height={2} data={data} />
    </div>
  );
};

export default LineChart;
