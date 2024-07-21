import React from "react";
import {  Button, Tabs } from 'antd';
import { Link} from "react-router-dom";
import "./Style/PercentageCPUAlert.css"


function PercentageCPUAlert(){
    return(
        <div className="maincpu-div">
            <div className="percentage-div">
                <label className="percentage-tittle">Alert : Percentage CPU</label>
                <Button className="percentage-btn">{<Link to="/monitorallalerts"> Back </Link>}</Button>
            </div>  
            <Tabs className="percentage-tab" >
            <Tabs.TabPane  tab={<Link to="/percentagecpualert/summary" style={{color: "#383874"}}>Summary</Link> } key="1" />
            <Tabs.TabPane  tab={<Link to="/percentagecpualert/history"  style={{color: "#383874"}}>History</Link>} key="2" />
            <Tabs.TabPane tab={<Link to="/percentagecpualert/diagnostics"  style={{color: "#383874"}}>Diagnostics</Link>} key="3" />
        </Tabs>
       
    </div>
    );

};
export default PercentageCPUAlert;

