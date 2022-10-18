import React, { useState, useEffect } from "react";
import axios from "axios";

export const OperatingS = () => {
  const [Opersys, setOpersys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/operatingsystem").then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setOpersys(result.data.value);
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
    Datas = Opersys.map((item) => {
      return (
        <tr key={item}>
          <td><img src={item.logo} alt="Browser"/>{item.label}</td>
          <td>{item.nb_visits}</td>
        </tr>
      );
    })
  }
  return (
    <div className="Browser-container">
    <div className="table-title">
      <h3>Operating System</h3>
    </div>
    <div className="table-data">
      <table cellSpacing={0} cellPadding={0} className="table-data-table">
        <thead>
          <tr>
            <th>Operating System</th>
            <th>Visitors</th>
          </tr>
        </thead>
        <tbody>
          {Datas}
        </tbody>
      </table>
    </div>
  </div>
  )
}
