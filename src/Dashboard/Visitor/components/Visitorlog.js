import React, { useState, useEffect } from "react";
import axios from "axios";

export const Visitorlog = () => {
  const [Visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/VisitorLog`).then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setVisitors(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = <snap>LOADING....</snap>;
  } else {
    Datas = Visitors.map((item) => {
      return (
        <div>
          <div className="visitor-log-Content">
            <div className="Left">
              <div className="Country-Name">
                <img src={require(`../../${item.countryFlag}`)} alt="" />
                <h4>{item.location}</h4>
              </div>
              <div className="Channel-Type">
                <h4>{item.referrerTypeName}</h4>
              </div>
              <div className="IP-Address">
                <h4>{item.visitIp}</h4>
              </div>
              <div className="Date">
                <h4>{item.serverDatePrettyFirstAction}</h4>
              </div>
              <div className="Time">
                <h4>{item.visitLocalTime}</h4>
              </div>
            </div>
            <div className="center">
              <div className="Software">
                <img src={require(`../../${item.browserIcon}`)} alt="" />
                <br />
                <img src={require(`../../${item.deviceTypeIcon}`)} alt="" />
                <br />
                <img
                  src={require(`../../${item.operatingSystemIcon}`)}
                  alt=""
                />
                <br />
              </div>
            </div>
            <div className="right">
              <div className="Time">
                <h4>{item.visitCount} :Visits</h4>
                <h4>{item.actions} :Actions</h4>
                <h4>{item.visitDurationPretty} :Total Time Spent</h4>
              </div>
            </div>
          </div>
          <div className="Hr_line">
            <hr/>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="table-title">
      <h3>Visitor log</h3>
      <div>{Datas}</div>
    </div>
  );
};
