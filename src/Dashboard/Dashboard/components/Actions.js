import React, { useState, useEffect } from "react";
import axios from "axios";

export const Actions = () => {
  const [tot, settot] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = "192.168.0.37:8000";
    axios.get(`http://${HomeIp}/api/TotalVisitors`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        settot(result.data.value);
      }
    });
  }, []);
  var Data = [
    tot.map((item) => {
      return item.visitors;
    }),
  ];
  return (
    <div className="Totla-visits">
    <div className="Number">
      <h3>{Data}</h3>
    </div>
    <div className="title">
      <h3>Total Visits</h3>
    </div>
  </div>
  )
}
