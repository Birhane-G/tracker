import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
export const VisirorsT = () => {
  return (
    <div className="Visitor-over-day">
      <div className="visitor-Over-title">
        <h3>Visirors over Day</h3>
      </div>
      <div className="datas-container">
        <VisirorsODD />
      </div>
    </div>
  );
};

const VisirorsODD = () => {
  const [OverTime, setOverTime] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = "192.168.0.37:8000";
    axios.get(`http://${HomeIp}api/VisitorOverDay`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setOverTime(result.data.value);
      }
    });
  }, []);
  const labels = ["Mon", "tus", "wed", "tur", "fri", "sat", "sun"];
    
  const data = {
    labels: labels,
    datasets: [
      {
        label: "visits",
        backgroundColor: "#dc105a",
        borderColor: "#dc105a",
        data: [],
      },
    ],
  };
  return (
    <div className="data">
      <Line width={"10%"} height={2} data={data} />
    </div>
  );
};
