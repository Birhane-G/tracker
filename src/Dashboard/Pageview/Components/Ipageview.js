import React, { useState, useEffect } from "react";
import axios from "axios";

export const Ipageview = () => {
  const [PageView, setPageView] = useState([]);
  const [PageCont, setPageCont] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/PageView`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setPageView(result.data.value.original.pageview);
        // console.log(result.data.value.original.pageview);
        // setPageCont(result.data.value.original.Alldata);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <h3>LOADING....</h3> 
    );
  } else {
    Datas = PageCont.map((item) => {
      return (
        <tr>
          <td>{item.segment}</td>
          <td>{}</td>
          <td>{}</td>
          <td>{}</td>
        </tr>
      );
    })
  }
  return (
    <div className="pageview-include-content">
      <div className="table-title">
        <h3>PageView</h3>
        </div>
        <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Page Url</th>
              <th>Pageview</th>
              <th>Unique Pageview</th>
              <th>Bounce Rate</th>
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
