import React, { useState, useEffect } from 'react'
import axios from "axios";

export const DeviceModel = () => {
  const [Model, setModel] = useState([]);
  const [loading, setWait] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.0.37:8000';
    axios.get(`http://${HomeIp}/api/DeviceModel`).then((result) => {
      if (result.data.status === 200) {
        setWait(false);
        setModel(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <snap>Loading...</snap> 
    );
  } else {

    Datas = Model.map((item) => {
      return (
        <tr key={item}>
          <td>{item.label}</td>
          <td>{item.nb_visits}</td>
        </tr>
      );
    });
  }
  
  return (
    <div className="Browser-container">
    <div className="table-title">
      <h3>Device Model</h3>
    </div>
    <div className="table-data">
      <table cellSpacing={0} cellPadding={0} className="table-data-table">
        <thead>
          <tr>
            <th>Device Model</th>
            <th>Visits</th>
          </tr>
        </thead>
         <tbody>{Datas}</tbody>
      </table>
    </div>
  </div>
  )
}
