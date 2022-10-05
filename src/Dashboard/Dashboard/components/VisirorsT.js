import React from "react";
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
  const labels = ["Mon", "tus", "wed", "tur", "fri", "sat", "sun"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "visits",
        backgroundColor: "#dc105a",
        borderColor: "#dc105a",
        data: [0.15, 0.2, 0.7, 0.4, 1, 0.77, 0.57],
      },
    ],
  };
  return (
    <div className="data">
      <Line width={"10%"} height={2} data={data} />
    </div>
  );
};
