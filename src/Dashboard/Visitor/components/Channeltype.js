import React, { useState, useEffect } from "react";
import axios from "axios";

export const Channeltype = () => {
  const [ChannelType, setChannelType] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/ChannelType`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setChannelType(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <snap>LOADING....</snap> 
    );
  } else {
    Datas = ChannelType.map((item) => {
      return (
        <tr key={item}>
          <td>{item.label}</td>
          <td>{item.nb_uniq_visitors}</td>
        </tr>
      );
    })
  }
  return (
    <div className="Visitor-Channel-type">
      <div className="table-title">
        <h3>Channel Type</h3>
        <div className="table-data">
          <table
            cellPadding="0"
            cellspacing="0"
            border="0"
            className="table-data-table"
          >
            <thead>
              <tr>
                <th>Channel</th>
                <th>Uniq_Visits</th>
              </tr>
            </thead>
            <tbody>
              {Datas}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
