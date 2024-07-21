import { Button, Row, Col, Card, Flex, Progress } from "antd";
import { Link } from "react-router-dom";
import {UnorderedListOutlined, EllipsisOutlined, CaretUpOutlined, RiseOutlined, CrownOutlined} from "@ant-design/icons";
import { LineChart, Line, XAxis,  YAxis,Tooltip, CartesianGrid } from 'recharts';
import WaitTimeAlertData from "./Data/WaitTimeAlertData.json";
import AlertVolumeTrendsData from "./Data/AlertVolumeTrendsData1.json";
import AlertVolumeTrendsData2 from "./Data/AlertVolumeTrendsData2.json";
import "./Style/Dashboard.css";

const twoColors = {
  '0%': '#8676FF',
  "50%": "#FFBA69",
  '100%': '#FF708B',
};
function AlertManagementDashboard(){
    return(
        <div className="dashboard-div">
            <div className="label-div">
                <label className="dashboard-label">MONITOR | OVERVIEW</label>
                <Button className="manage-workflow-btn" disabled> Manage Workflow <EllipsisOutlined /></Button>
                <Button className="label-btn" icon={<UnorderedListOutlined />} > Manage Alerts </Button>
                
            </div>
            <Row>
                <Col span={4}>
                { <Link to= "monitorallalerts">
                    <Card  className="dashboard-alert-card"
                        bordered={false}
                        >
                            <Flex wrap="wrap" gap="small" style={{marginTop:"-7px"}}>
                                 <Progress size={40} type="circle" percent="32" strokeColor={twoColors} />
                            </Flex>
                            {/* <AlertOutlined  /> */}
                            <label className="card-label">
                                All Alerts <br/>
                                43,833 <CaretUpOutlined style={{color: "#00B929", width: "12px"}} />
                                <label style={{fontSize:"12px", color: "#00B929"}}>10%</label>
                            </label>
                    </Card>
                    </Link>}
                </Col>
                <Col span={4}>
                {<Link to="/alertsmanagement" relative="path">
                <Card  className="dashboard-alert-card"
                        bordered={false}
                        >
                            <div className="crn-div"><CrownOutlined style={{fontSize: "150%"}} className="crn-icon"/></div>
                            {/* <AlertOutlined  /> */}
                            <label className="card-label">
                            All Alert Rules <br/>
                                24 
                            </label>
                    </Card>
                    </Link>}
                </Col>
                <Col span={4}>
                <Card  className="dashboard-alert-card"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <div className="rise-icon"><RiseOutlined style={{fontSize: "150%"}} className="crn-icon"/></div>
                            <label className="card-label">
                                Workflows <br/>
                                64 
                            </label>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={9}>
                    <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                                Average wait time alert 
                                <p>A standard line chart provides a clear way to compare trends over time.</p>
                                 </label>
                                 <LineChart width={450} height={220} data={WaitTimeAlertData} 
                                    margin={{ top: 25, right: 30, bottom: 5, left: -38}}>
                                    <CartesianGrid horizontal={false}  strokeDasharray="1"/>
                                    <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 10, right: 10}} fontSize="10" color="#7E7E8F"/>
                                    <YAxis  dataKey="value"  axisLine={false} tickLine ={false} fontSize="10" color="#7E7E8F"/>
                                    <Tooltip  cursor={false}/>
                                    <Line type="monotone" dataKey="value" stroke="#8676FF"  />
                                </LineChart>     
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                            Alert Volume Trends 
                               <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                            <LineChart width={450} height={220} data={AlertVolumeTrendsData} 
                                margin={{ top: 25, right: 30, bottom: 5, left: -38}}>
                                <CartesianGrid horizontal={false}  strokeDasharray="1"/>
                                <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 10, right: 10}} fontSize="10" color="#7E7E8F"/>
                                <YAxis  dataKey="value"  axisLine={false} tickLine ={false} fontSize="10" color="#7E7E8F"/>
                                <Tooltip  cursor={false}/>
                                <Line type="monotone" dataKey="value" stroke="#8676FF"  />
                                <Line type="monotoneX" dataKey="data" stroke="#A145FF"/>
                            </LineChart>
                    </Card>
                </Col>
                <Col span={5}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-team">
                               Team Matrics
                            </label>
                            <Row className="team-crd">
                                <Col span={9} >John</Col>
                                <Col span={9} style={{opacity:"0.6"}}>650</Col>
                                <Col >15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>Bill</Col>
                                <Col span={9} style={{opacity:"0.6"}}>612</Col>
                                <Col>17 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>Lyna</Col>
                                <Col span={9} style={{opacity:"0.6"}}>598</Col>
                                <Col>17 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>Steyn</Col>
                                <Col span={9} style={{opacity:"0.6"}}>513</Col>
                                <Col>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>Bob</Col>
                                <Col span={9} style={{opacity:"0.6"}}>498</Col>
                                <Col>17 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>Bill</Col>
                                <Col span={9} style={{opacity:"0.6"}}>321</Col>
                                <Col>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col span={9}>John</Col>
                                <Col span={9} style={{opacity:"0.6"}}>650</Col>
                                <Col>15 min</Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col  span={9}>John</Col>
                                <Col span={9} style={{opacity:"0.6"}}>650</Col>
                                <Col  >15 min</Col>
                            </Row>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col span={5}>
                    <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-team">
                               Top Alerts Today
                            </label>
                            <Row className="team-crd">
                                <Col className="alt-col" span={11}>CPU Utilization</Col>
                                <Col className="alt-col" style={{ opacity:"0.6"}}>3:24</Col>
                                <Col ><Button className="alt-btn" style={{borderColor:"red"}}>High</Button></Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col className="alt-col" span={11}>AWS S3</Col>
                                <Col className="alt-col" style={{opacity:"0.6"}}>3:11</Col>
                                <Col ><Button className="alt-btn" style={{borderColor:"orange"}}>Medium</Button></Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col className="alt-col" span={11}>Dard Disk</Col>
                                <Col className="alt-col" style={{ opacity:"0.6"}}>3:00</Col>
                                <Col ><Button className="alt-btn" style={{borderColor:"green"}}>Low</Button></Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col className="alt-col" span={10}>Network IN</Col>
                                <Col className="alt-col" style={{ opacity:"0.6"}}>23:08</Col>
                                <Col ><Button style={{borderColor:"red"}} className="alt-btn">High</Button></Col>
                            </Row>
                            <Row className="team-crd-lbl">
                                <Col className="alt-col" span={10}>Network Out</Col>
                                <Col className="alt-col" style={{ opacity:"0.6"}}>21:06</Col>
                                <Col ><Button className="alt-btn" style={{borderColor:"orange"}}>Medium</Button>
                                </Col>
                            </Row>
                            
                            <Row className="team-crd-lbl">
                                <Col className="alt-col" span={10}>VCenter</Col>
                                <Col className="alt-col" style={{opacity:"0.6"}}>20:03</Col>
                                <Col >
                                    <Button className="alt-btn"  style={{borderColor:"green"}}>Low</Button>
                                </Col>
                            </Row>
                        </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                            Alert Volume By Trends
                            <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                            <LineChart width={450} height={220} data={AlertVolumeTrendsData2} 
                                margin={{ top: 25, right: 30, bottom: 5, left: -38}}>
                                <CartesianGrid horizontal={false}  strokeDasharray="1"/>
                                <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 10, right: 10}} fontSize="10" color="#7E7E8F"/>
                                <YAxis  dataKey="value"  axisLine={false} tickLine ={false} fontSize="10" color="#7E7E8F"/>
                                <Tooltip  cursor={false}/>
                                <Line type="monotone" dataKey="value" stroke="#A145FF"  />
                                <Line type="monotoneX" dataKey="data" stroke="#FA6298"/>
                                <Line type="monotoneX" dataKey="mdata" stroke="#FAA24B"/>
                                <Line type="monotoneX" dataKey="tdata" stroke="#F9D33D"/>
                                <Line type="monotoneX" dataKey="vdata" stroke="#88E143"/>
                                <Line type="monotoneX" dataKey="vtdata" stroke="#53CA43"/>
                            </LineChart>
                    </Card>
                </Col>
                <Col span={9}>
                <Card  className="dash-avr-tm-crd"
                        bordered={false}
                        >
                            {/* <AlertOutlined  /> */}
                            <label className="dash-avr-tm-lbl">
                                Average Response Time Alert
                                <p>A standard line chart provides a clear way to compare trends over time.</p>
                            </label>
                            <LineChart width={450} height={220} data={WaitTimeAlertData} 
                                    margin={{ top: 25, right: 30, bottom: 5, left: -38}}>
                                    <CartesianGrid horizontal={false}  strokeDasharray="1"/>
                                    <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 10, right: 10}} fontSize="10" color="#7E7E8F"/>
                                    <YAxis  dataKey="value"  axisLine={false} tickLine ={false} fontSize="10" color="#7E7E8F"/>
                                    <Tooltip  cursor={false}/>
                                    <Line type="monotone" dataKey="value" stroke="#8676FF"  />
                                </LineChart>    
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default AlertManagementDashboard;
