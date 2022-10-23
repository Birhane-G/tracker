import React, { useState, useEffect } from "react";
import axios from "axios";

export const Plugin = () => {
  const [Plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = "192.168.1.11:8000";
    const CreativeIp = "192.168.43.155:8000";
    axios.get(`http://${HomeIp}/api/plugin`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setPlugins(result.data.value);
      }
    });
  }, []);

  var Datas = "";
  if (loading) {
    Datas = <h3>LOADING....</h3>;
  } else {
    // console.log(Continent);
    Datas = Plugins.map((item) => {
      return (
        <tr key={item}>
          <td>
            <div className="log-Text">
              <img src={require(`../../${item.logo}`)} alt="Country" />
              {item.label}
            </div>
          </td>
          <td>{item.nb_visits}</td>
        </tr>
      );
    });
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
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};
