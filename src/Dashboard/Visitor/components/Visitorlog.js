import React, { useState, useEffect } from "react";
import axios from "axios";
// import Et from "";

export const Visitorlog = () => {
  const [Visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://192.168.1.11:8000/api/VisitorLog").then((result) => {
      if (result.data.status === 200) {
        setLoading(false);
        setVisitors(result.data.value);
      }
    });
  }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <h3>LOADING....</h3> 
    );
  } else {
    Datas = Visitors.map((item) => {
      return (
        <div className="visitor-log-Content">
        <div className="Left" >
          <div className="Country-Name">
            <img src={require(`../../${item.countryFlag}`)} alt=""/>
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
          <img src={require(`../../${item.browserIcon}`)} alt=""/><br/>
          <img src={require(`../../${item.deviceTypeIcon}`)} alt=""/><br/>
          <img src={require(`../../${item.operatingSystemIcon}`)} alt=""/><br/>
          {/* <img src={require(`../../${item.visitorTypeIcon}`)} alt=""/> */}
          </div>
        </div>
        <div className="right">
          <div className="Software">
          </div>
        </div>
        </div>
      );
    })
  }
  return (
    <div className="table-title">
      <h3>Visitor log</h3>
      <div>
        {Datas}
      </div>
    </div>
  );
};
