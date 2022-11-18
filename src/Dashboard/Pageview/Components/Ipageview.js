import React, { useState, useEffect } from "react";
import axios from "axios";

export const Ipageview = () => {
  const [PageView, setPageView] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.0.37:8000';
    axios.get(`http://${HomeIp}/api/PageView`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setPageView(result.data.value.original.pageview);
      }
    });
  }, []);
  // const valueArray = JSON.parse(PageView);
  console.log(PageView)
  var Datas = "";
  if (loading) {
    Datas = (
          <snap>LOADING....</snap> 
    );
  } 
  else {
    Datas = Object.keys(PageView).map((item) =>
    {
      return (
          <td>
            <tr>{item.nb_pageviews}</tr>
          </td>
      );
    });
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
              <th>Visit Length</th>
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
