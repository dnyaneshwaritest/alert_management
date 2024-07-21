import React from "react";
import {Row, Col, Input, Card, Divider} from "antd";
import PercentageCPUAlert from "../PercentageCPUAlerts";
// import { Line} from "@ant-design/charts";
import "../Style/Summary.css";
import SummartData from "../Data/SummaryUsageData.json";
import { LineChart, Line, XAxis,  YAxis,Tooltip, CartesianGrid } from 'recharts';

// const config = {
//     SummartData,
//     height: 250,
//     xField: 'Month',
//     yField: 'value',
    // point: {
    //   size: 5,
    // },
    // label:{
    //     style:{
    //         fill:"#aaa",
    //     },
    // },
    // xAxis:{
       
    //     label:{
    //         // autoRotate:false,
    //         visible: false
    //     },
        
    // },
    // yAxis:{
    //     forceNiceScale: false,
    //     min: 25, 
    //     max: 100, 
    //     tickAmount: 7,
    //     // nice: true,
    //     label:{
    //         formatter:(v)=>v.toFixed(0)+'%',
    //             // return `${v} units`;

            
    //     },
    // },
    // slider:{
    //     start: 25,
    //     end:100,
    // }

//    };

function Summary(){
    return(
       <div >
        <PercentageCPUAlert/>
            <Row className="severity-card" >
            <Col span={4} order={1} >
                <label className="serverity-label">Serverity</label>
                <Input classNames="serverity-input" value="High" name="" variant="borderless" className="input-border"readOnly={true}/>
            </Col>
            <Col span={4} order={2} className="severity-col">
                <label className="serverity-label">Affected Resource</label>
                <Input value="Prod_DB_SYN14" name="" variant="borderless" className="input-border"readOnly={true}/>
            </Col>
            <Col span={4} order={3} style={{marginLeft:"50px"}} >
            <label className="serverity-label">State</label>
                <Input value="New" name="" variant="borderless" className="input-border"readOnly={true}/>
            </Col>
            <Col span={4} order={4}>
            <label className="serverity-label">Monitor Condition</label>
                <Input value="Fired" name="" variant="borderless" className="input-border"readOnly={true}/>
            </Col>
            <Col span={4} order={5} style={{marginLeft:"60px"}}>
                <label className="serverity-label">Fired Time</label>
                <Input value="08-03-2024; 3-17-17 pm" name="" variant="borderless"  className="input-border"readOnly={true}/>
            
            </Col>
            </Row>
            <div>
            <Card className="uses-card"> 
                <label className="usage-card-label">
                    Usage
                <p>A standard line chart provides a clea way to compare trends over time</p>
                </label>  
                    <LineChart width={1150} height={250} data={SummartData} 
                        margin={{ top: 25, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid horizontal={false} />
                        <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 45, right: 15}}/>
                        <YAxis  dataKey="value"  axisLine={false} tickLine ={false}/>
                        <Tooltip  cursor={false}/>
                        <Line type="monotone" dataKey="value" stroke="#8676FF" />
                    </LineChart>
    
                </Card>
            </div>
            <div className="alert-card-div"> 
            <Card className="alert-card"> 
                <label className="alert-detail-lbl"> Alert Details</label> 
                <Row style={{paddingTop:"20px"}} >
            <Col span={8} order={1} >
                <label>Affected Resources: Prod_DB_SYN14</label>
            </Col>
            <Col order={2}  >
                <label>Percentage CPU Used: 82.00%</label>
            </Col>
            </Row>
            <Row style={{paddingTop:"20px"}} >
            <Col span={8} order={1} >
                <label className="alert-details">Evaluation window start time (for which alert fired)</label>
                <p style={{marginTop:"2px"}} className="alert-details-p">09-03-2024; 3:17:17 PM</p>
            </Col>
            <Col order={2}  >
                <label className="alert-details">Evaluation window end time (for which alert fired)</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>09-03-2024 3:22:12 PM</p>
            </Col>
            </Row>
            <Divider dashed style={{marginTop:"0px"}}/>
            <label className="alert-detail-lbl">Criterion</label>
            <Row className="criterion-label" >
            <Col span={4} order={1} >
                <label className="alert-details">Metric Name</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>Percentage CPU</p>
            </Col>
            <Col span={8} order={2}  >
                <label className="alert-details">Metric Namespace</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>Microsoft.Compute/VirtualMachines</p>
            </Col>
            <Col span={7} order={3}  >
                <label className="alert-details">Time Aggregation</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>Average</p>
                <p className="alert-details-p" style={{marginTop:"-10px"}}>Threshold:0.2%</p>
            </Col>
            <Col span={5} order={4}  >
                <label className="alert-details">Operator</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>GreaterThan</p>
                <p className="alert-details-p" style={{marginTop:"-10px"}}>Metric value (when alert fired) : 0.62%</p>
            </Col>
            </Row>
            <Row  >
            <Col span={4} order={1} >
                <label className="alert-details">Dimension Name</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>microsoft.resourceID</p>
                <p className="alert-details-p" style={{marginTop:"-10px"}}>microsoft.resourceType</p>
            </Col>
            <Col span={8} order={2}  >
                <label className="alert-details">Dimension Value</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>/subscriptions/5be0a6dc-510-4088-bd4-86b6587deb36/Res...</p>
                <p className="alert-details-p" style={{marginTop:"-10px"}}>Microsoft.Computer/virtualmachines</p>
            </Col>
            <Col span={7} order={3}  >
                <label className="alert-details">Description</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>CPU alert greater than 80.0%</p>
             </Col>
            <Col span={5} order={4}  >
                <label className="alert-details">Target Resource Type</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>microsoft.computer/virtualmatchin</p>
            </Col>
            </Row>
            <Row  >
            <Col span={4} order={1} >
                <label className="alert-details">Monitor Service</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>Platform</p>
            </Col>
            <Col span={8} order={2}  >
                <label className="alert-details">Single Type</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>Metric</p>
            </Col>
            <Col span={7} order={3}  >
                <label className="alert-details">Alert ID</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>9e8b7d58-1d16-b882-e22ae68ef7a2</p>
            </Col>
            <Col span={5} order={4}  >
                <label className="alert-details">Alert Rule</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>CPU Alert</p>
            </Col>
            </Row>
            <Row  >
            <Col span={4} order={1} >
                <label className="alert-details">Suppression Status</label>
                <p className="alert-details-p" style={{marginTop:"2px"}}>None</p>
             </Col>
            </Row>

                 </Card>
            </div>
       </div>
    )
};

export default Summary;