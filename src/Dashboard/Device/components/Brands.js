import React from "react";
import { Pie } from "react-chartjs-2";

export const Brands = () => {
  const labels = ["Samsung", "IPhone", "Tecno", "HTC", "Nexus", "Other"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: [20, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#8db9fa",
          "#d43617",
          "#c717d4",
          "#d49c17",
          "#17d463",
          "#c9e919",
        ],
        borderColor: [
          "white",
        ],
        borderWidth: 0.5,
      },
    ],
  };
const options = {
  responsive: true,
}
  return (
    <div className="piechart">
      <Pie options={options} data={data} className="pie"/>
    </div>
  );
};
