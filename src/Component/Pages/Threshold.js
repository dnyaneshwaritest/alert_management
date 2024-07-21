import { Table } from "antd";
import React from "react";
import "../Style/Threshold.css";
const columns = [
    {
      title: 'DB Retention Policy',
      dataIndex: 'dbretentionpolicy',
      key: 'dbretentionpolicy',
    },
    {
      title: 'Mesurements & Tags',
      dataIndex: 'mesurement',
      key: 'mesurement',
    },
    {
      title: 'Fields',
      dataIndex: 'fields',
      key: 'fields',
    },
  ];

function Threshold(){
    return(
        <div >
            <label className="threshold-tbl-lbl">Time Series</label>
            <Table columns={columns}  className="threshold-tble"/>
        </div>
    )
};

export default Threshold;


  
  