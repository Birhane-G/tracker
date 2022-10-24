import React, { useState, useEffect } from 'react'
import axios from 'axios';
export const ScreenResolution = () => {
   const [Resolution, setResolution] = useState([]);
  const [loading, setWait] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/ScreenResolution`).then((result) => {
      if (result.data.status === 200) {
        setWait(false);
        setResolution(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <snap>Loading...</snap> 
    );
  } else {

    Datas = Resolution.map((item) => {
      return (
        <tr key={item}>
          <td>1</td>
          <td>{item.label}</td>
          <td>{item.nb_visits}</td>
       

        </tr>
      );
    });
  }
  return (
    <div className="Browser-container">
      <div className="table-title">
        <h3>Screen Resolution</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Screen Resolution</th>
              <th>Visits</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <td>
                1280 x 800
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                 920 x 800
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
                600 x 420
              </td>
              <td>1200</td>
            </tr>
            <tr>
              <td>
              1900 x 1020
              </td>
              <td>1200</td>
            </tr>
          </tbody> */}
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  )
}
