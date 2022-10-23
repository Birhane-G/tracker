import React, { useEffect,useState } from "react";
import axios from "axios";

const DeviceType = () => {
  const [Dtype, setDtype] = useState([]);
  const [loading, setWait] = useState(true);
  useEffect(()=>{
    const HomeIp =  '192.168.1.11:8000';
    const CreativeIp = '192.168.43.155:8000';
    axios.get(`http://${HomeIp}/api/DeviceType`).then((result) => {
    if (result.data.status === 200){
       setWait(false);
        setDtype(result.data.value);
    }
  });
    }, []);
  var Datas = "";
  if (loading) {
    Datas = (
          <h3>Loading...</h3> 
    );
  } else {

    Datas = Dtype.map((item) => {
      return (
        
        <tr key={item}>
           <td>1</td>
          <td><img src={require(`../../${item.logo}`)} alt=""/>{item.label}</td>
          <td>{item.label}</td>
          <td>{item.nb_visits}</td>
       

        </tr>
      );
    });
  }
  return (
    <div className="Browser-container">
      <div className="table-title">
        <h3>Device Type</h3>
      </div>
      <div className="table-data">
        <table cellSpacing={0} cellPadding={0} className="table-data-table">
          <thead>
            <tr>
              <th>Devices</th>
              <th>Visits</th>
            </tr>
          </thead>
       
          <tbody>{Datas}</tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceType;
