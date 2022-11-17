import React, { useState, useEffect } from "react";
import axios from "axios";

export const Continent = () => {
  const [Continent, setContinent] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.0.37:8000';
    axios.get(`http://${HomeIp}/api/Continent`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setContinent(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <snap>LOADING....</snap> 
    );
  } else {
    console.log(Continent);
    Datas = Continent.map((item) => {
      return (
        <tr key={item}>
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
        <h3>Continent</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Continent</th>
              <th>Visitors</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};
