import React from "react";
import {Row, Col, Input, Divider, } from "antd";
import PercentageCPUAlert from "../PercentageCPUAlerts";
import "../Style/History.css"


function History(){
    return(
        <div>
            <PercentageCPUAlert defaultActiveKey="2"/>
       
        <div className="history-div">
            
            <label className="history-lbl">Percentage CPU</label>
            <Row className="history-card" >
            <Col span={16} order={1} style={{marginBottom:"0px"}} >
                <label className="history-data">Name</label>
            </Col>
            <Col  order={2} >
                <label className="history-data">Date/Time</label>
            </Col>
            </Row>
            <Divider dashed/>
            <Row className="history-row" >
            <Col span={16} order={1} >
                <label className="history-data">
                Action group <a>email to Siddhesh</a> execute (configured on alert rule)
                </label>
            </Col>
            <Col  order={2} >
                <label className="history-data">09-03-2024; 11:29:02</label>
            </Col>
            </Row>
            <Divider dashed/>
            <Row className="history-row" >
            <Col span={16} order={1} >
                <label className="history-data">
                   Alert Fired
                </label>
             </Col>
            <Col  order={2} >
                <label className="history-data">09-03-2024; 11:28:56</label>
            </Col>
            </Row>
            <Divider dashed/>
        </div>
        </div>
    )
};
export default History;