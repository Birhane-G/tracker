import React, {useState,useEffect} from "react";
import { Pie } from "react-chartjs-2";
import axios from 'axios';

export const Brands = () => {
   const [Brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/DeviceModel`).then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setBrands(result.data.value);
      }
    });
  }, []);
 // const labels = ["Samsung", "IPhone", "Tecno", "HTC", "Nexus", "Other"];
   var Labels = [
    Brands.map((item) => {
      return item.label;
    }),
  ];
  var Data = [
    Brands.map((item) => {
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
        borderColor: [
          "white"
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
