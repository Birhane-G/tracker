import React, { useState, useEffect } from "react";
import axios from "axios";

export const Plugin = () => {
  const [Plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/plugin").then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setPlugins(result.data.value);
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
    Datas = Plugins.map((item) => {
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
        <h3>Plugin</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Plugin</th>
              <th>Visits</th>
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
