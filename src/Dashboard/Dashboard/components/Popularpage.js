import React, { useState, useEffect } from "react";
import axios from "axios";

export const Popularpage = () => {
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
    Datas = AllDatas.map((item) => {
      return (
        <tr>
          <td>/index.html</td>
          <td>{Pageviewdata}</td>
        </tr>
      );
    });
  }
  return (
    <div className="popularpage-content">
      <div className="table-title">
        <h3>Popular page(7 days)</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Url</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};
