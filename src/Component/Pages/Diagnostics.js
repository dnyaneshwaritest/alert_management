import React from "react";
import { Row, Col, Divider} from "antd";
import PercentageCPUAlert from "../PercentageCPUAlerts";
import "../Style/History.css"

function Diagnostics(){
    return(
        <div>
             <PercentageCPUAlert defaultActiveKey="3"/>
       
        <div className="history-div">
           
            <label>Percentage CPU</label>
            <Row className="history-card" >
            <Col span={4} order={1} style={{marginBottom:"0px"}} >
                <label className="history-data">Name</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Severity</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Monitor Condition</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Alert State</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Affected Resource</label>
            </Col>
            </Row>
            <Divider dashed/>
            <Row >
             <Col span={4} order={1} style={{marginBottom:"0px"}} >
                <label className="history-data">Percentage CPU</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">High</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Fired</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">New</label>
            </Col>
            <Col span={4} order={2} >
                <label className="history-data">Prod_DB_SYN14</label>
             </Col>
            </Row>
            <Divider dashed/>
        </div>
        </div>
    )
};
export default Diagnostics;