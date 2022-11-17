import React, { useState, useEffect } from "react";
import axios from "axios";

export const Country = () => {
  const [Country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = '192.168.0.37:8000';
    axios.get(`http://${HomeIp}/api/Country`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setCountry(result.data.value);
      }
    });
  }, []);

  var Datas = "";
  if (loading) {
    Datas = <snap>LOADING....</snap>;
  } else {
    Datas = Country.map((item) => {
      return (
        <tr key={item}>
          <td>
            <div className="log-Text">
              <img src={require(`../../${item.logo}`)} alt="Country" />
              {item.label}
            </div>
          </td>
          <td>{item.nb_visits}</td>
          <td>{item.nb_actions}</td>
        </tr>
      );
    });
  }
  return (
    <div className="container">
      <div className="table-title">
        <h3>Country</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Country</th>
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
