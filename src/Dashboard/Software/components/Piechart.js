import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

export const Piechart = () => {
  const [Engines, setEngines] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/engine").then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setEngines(result.data.value);
      }
    });
  }, []);
  
  var Labels = [
    Engines.map((item) => {
      return item.label;
    }),
  ];
  var Data = [
    Engines.map((item) => {
      return item.nb_visits;
    }),
  ];
  const data = {
    labels: Labels,
    datasets: [
      {
        label: "# of Votes",
        data: Data,
        backgroundColor: [
          "#8db9fa",
          "#d43617",
          "#c717d4",
          "#d49c17",
          "#17d463",
          "#c9e919",
        ],
        borderColor: ["white"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
  };
  return (
    <div className="piechart">
      <Pie options={options} data={data} className="pie" />
    </div>
  );
};
