import React, { useState, useEffect } from 'react'
import axios from "axios";

export const DeviceModel = () => {
  const [Model, setModel] = useState([]);
  const [loading, setWait] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:8000/api/DeviceModel").then((result) => {
      if (result.data.status === 200) {
        setWait(false);
        setModel(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <h3>Loading...</h3> 
    );
  } else {

    Datas = Model.map((item) => {
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
      <h3>Device Model</h3>
    </div>
    <div className="table-data">
      <table cellSpacing={0} cellPadding={0} className="table-data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Device Model</th>
            <th>Visits</th>
          </tr>
        </thead>
        {/* <tbody>
          <tr>
            <td>
              <img src={Apple} alt="" className="icons"/> Iphone 12
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Samsung} alt="" className="icons"/> Samsung Note 10
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Dell} alt="" className="icons"/> Dell Optiplex 790
            </td>
            <td>1200</td>
          </tr>
          <tr>
            <td>
              <img src={Hp} alt="" className="icons"/> HP Probook
            </td>
            <td>1200</td>
          </tr>
           <tr>
            <td>
              <img src={Samsung} alt="" className="icons"/> Samsung S20
            </td>
            <td>10git 00</td>
          </tr>
           <tr>
            <td>
              <img src={Apple} alt="" className="icons"/> Iphone 7+
            </td>
            <td>100</td>
          </tr>
           <tr>
            <td>
              <img src={Hp} alt="" className="icons"/> HP Elitebook
            </td>
            <td>70</td>
          </tr>
           <tr>
            <td>
              <img src={Nokia} alt="" className="icons"/> Nokia A1
            </td>
            <td>60</td>
          </tr>
        </tbody> */}
         <tbody>{Datas}</tbody>
      </table>
    </div>
  </div>
  )
}
