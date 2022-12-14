import React, { useState, useEffect } from "react";
import axios from "axios";

const Browser = () => {
  const [Browser, setBrowser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = '192.168.0.37:8000';
    axios.get(`http://${HomeIp}/api/Browser`).then((result) => {
      if (result.data.status === 200) {
        // console.log(result.data.value[0]['label'])
        setLoading(false);
        setBrowser(result.data.value);
      }
    });
  }, []);

  var Datas = "";
  if (loading) {
    Datas = <snap>LOADING....</snap>;
  } else {
    Datas = Browser.map((item) => {
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
        <h3>Browser</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Browser</th>
              <th>Visitors</th>
            </tr>
          </thead>
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Browser;
