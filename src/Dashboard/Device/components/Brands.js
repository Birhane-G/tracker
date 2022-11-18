import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

export const Brands = () => {
  const [Brands, setBrands] = useState([]);
  useEffect(() => {
    const HomeIp = "192.168.0.37:8000";
    axios.get(`http://${HomeIp}/api/DeviceBrand`).then((result) => {
      if (result.data.status === 200) {
        setBrands(result.data.value);
      }
    });
  }, []);
  var Labels = [
    Brands.map((item) => {
      var i;
      var value = new Array();
      // console.log(value);
      for (i = 0; i <= Brands.length; i++) {
          var t = i.toString();
          // var num = Brands[t].label;
          // console.log(t)
          // value.push(t)
      }
    }),
  ];
  var Data = [
    Brands.map((item) => {
      return item.nb_visits;
    }),
  ];
  const data = {

    labels: [Labels],

    datasets: [
      {
        label: "# of Votes",
        data: [5, 8, 1],
        backgroundColor: [
          "#8db9fa",
          "#d43617",
          "#c717d4",
          "#d49c17",
          "#17d463",
          "#c9e919",
        ],
        borderColor: ["white"],
        borderWidth: 0.5,
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
