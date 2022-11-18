import React, { useState, useEffect } from "react";
import axios from "axios";

export const Ipageview = () => {
  const [PageView, setPageView] = useState([]);
  const [AllDatas, setAllDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp = "192.168.0.37:8000";
    axios.get(`http://${HomeIp}/api/PageView`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setPageView(result.data.value.original.pageview);
        setAllDatas(result.data.value.original.Alldata);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = <snap>LOADING....</snap>;
  } else {
    var Pageviewdata = <span>{PageView.nb_pageviews}</span>;
    var Uniquepage = <span>{PageView.nb_uniq_pageviews}</span>;
    Datas = AllDatas.map((item) => {
      const result = new Date(item.avg_time_on_page * 1000).toISOString().slice(11, 19);
      return (
        <tr>
          <td>/index.html</td>
          <td>{Pageviewdata}</td>
          <td>{Uniquepage}</td>
          <td>{item.bounce_rate}</td>
          <td>{result}</td>
        </tr>
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
              <th>Avg Time on Page</th>
            </tr>
          </thead>
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};
