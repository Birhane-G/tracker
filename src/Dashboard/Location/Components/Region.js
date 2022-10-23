import React, { useState, useEffect } from "react";
import axios from "axios";

export const Region = () => {
  const [Region, setRegion] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/Region`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setRegion(result.data.value);
      }
    });
  }, []);

  var Datas = "";
  if (loading) {
    Datas = (
          <h3>LOADING....</h3> 
    );
  } else {
    // console.log(Continent);
    Datas = Region.map((item) => {
      return (
        <tr key={item}>
          <td>1</td>
          <td>{item.label}</td>
          <td>{item.nb_visits}</td>
          <td>{item.nb_actions}</td>
        </tr>
      );
    });
  }
  return (
    <div className="container">
      <div className="table-title">
        <h3>Region</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Region/State</th>
              <th>Visitors</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Datas}
          </tbody>
        </table>
      </div>
    </div>
  );
};
