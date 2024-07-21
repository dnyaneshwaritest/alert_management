import React from "react";
import { Button, Tabs } from "antd";
import "./Style/AlertType.css";
import Threshold from "./Pages/Threshold";

const Items = [
    {
        key: '1',
        label: "Threshold",
        children: <Threshold style={{maxWidth:"100%"}}/>
    },
    {
        key:"2",
        label:"Relative",
        children: "hello"
    },
    {
        key:"3",
        label:"Availability",
        children:"hi"
    }
    
  ]
function AlertType(){
    return(
        <div >
            <div className="rule-builder-form">
                <label className="alert-type-lbl">ALERT TYPE</label>
            <Button disabled className="frm-rule-btn">Save Rule</Button>
                <div  className="alt-type-table">
                    <Tabs style={{width:"100%", }}
                    defaultActiveKey="1"
                    items={Items} />           
                </div>
          </div>
    </div>
    )
};
export default AlertType;