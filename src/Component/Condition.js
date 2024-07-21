import React,{useState} from "react";
import { Button, Card, Menu, Dropdown, Input} from "antd";
import {LineChart,  CartesianGrid, XAxis, YAxis, Tooltip, Line} from "recharts";
import WaitTimeAlertData from "./Data/WaitTimeAlertData.json";
import { CaretDownOutlined, CodepenCircleOutlined } from '@ant-design/icons';
import "./Style/Condition.css";
function Condition (){
    const [selectQuery, setSelectQuery]=useState(null);
    const [compare, setCompare] = useState(null);
    const [previewQueryData, setPreviewQueryData] = useState(null);

    const HandleCompareDropdown = (e)=>{
        setCompare(e.key);
    }

    const HandleQueryDropdown = (e)=>{
        setSelectQuery(e.key);
    }

    const HandlePreviewQueryDropdown = (e)=>{
        setPreviewQueryData(e.key);
    }

const queryItem = (
    <Menu onClick={ HandleQueryDropdown} className="cndtn-dropdwn-value">
        <Menu.Item style={{color:"#383874"}} key="Query Ok"><CodepenCircleOutlined style={{paddingRight:"5px"}}/>Query Ok</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Query Fail"><CodepenCircleOutlined style={{paddingRight:"5px"}}/>Query Fail</Menu.Item>
    </Menu>
);

const compareItem = (
    <Menu onClick={HandleCompareDropdown} className="cndtn-dropdwn-value">
        <Menu.Item style={{color:"#383874"}} key="Greater than"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Greater than</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Less than"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Less than</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Equal to"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Equal to</Menu.Item>

    </Menu>
);

const previewData = (
    <Menu onClick={HandlePreviewQueryDropdown} className="cndtn-dropdwn-value">
        <Menu.Item style={{color:"#383874"}} key="Past 5 minutes"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Past 5 minutes</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Past 10 minutes"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Past 10 minutes</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Past 15 minutes"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Past 15 minutes</Menu.Item>
        <Menu.Item style={{color:"#383874"}} key="Past 30 minutes"> <CodepenCircleOutlined style={{paddingRight:"5px"}}/>Past 30 minutes</Menu.Item>
    </Menu>
)
   return(
        <div>
            <div className="rule-builder-form">
                <label className="alert-type-lbl">CONDITIONS</label>
            <Button disabled className="frm-rule-btn">Save Rule</Button>
            <Card className="cndtn-crd"
                 title="Conditions"
                 extra={
                    <div className="cndtn-div">
                        <Dropdown overlay={queryItem}  trigger={["click"]}>
                            <div  className="cndtn-dropdwn">
                            {selectQuery ? selectQuery : "Select time series"}
                                <CaretDownOutlined className="cndtn-down-icon"/></div>
                        </Dropdown>
                        <label  className="cndtn-lbl">is</label>
                        <Dropdown overlay={compareItem} trigger={['click']}>
                            <div  className="cndtn-dropdwn">
                               { compare ? compare : "greater than" }
                            <CaretDownOutlined className="cndtn-down-icon"/></div>
                        </Dropdown>
                        <Input placeholder="Placeholder" style={{width:"35%"}}/>
                    </div>                    
                 }          
                 >
                    <div className="cndtn-div">
                         <label  className="cndtn-lbl">Preview Data From</label>
                        <Dropdown overlay={previewData}  trigger={['click']}>
                            <div  className="cntd-prvw-dpdwn">
                                { previewQueryData ? previewQueryData: "Past 5 mintues"}
                                 <CaretDownOutlined className="cndtn-down-icon"/></div>
                        </Dropdown> 
                    </div> 
                    <div style={{marginTop:"2%"}}>
                        <label className="cq-queryok">cq-queryok</label> 
                        <p className="cq-queryok-p">A standard lie chart provides a clear way to compare trends over time</p>
                        <LineChart width={950} height={150} className="cq-queryok-chart" data={WaitTimeAlertData} 
                                    margin={{ top: 25, right: 30, bottom: 5, left: -38}}>
                                    <CartesianGrid horizontal={false}  strokeDasharray="1"/>
                                    <XAxis dataKey="Month"  tickLine ={false} padding = {{left: 10, right: 10}} fontSize="10" color="#7E7E8F"/>
                                    <YAxis  dataKey="value"  axisLine={false} tickLine ={false} fontSize="10" color="#7E7E8F"/>
                                    <Tooltip  cursor={false}/>
                                    <Line type="monotone" dataKey="value" stroke="#8676FF"  />
                                </LineChart>  
                    </div>

                    {/* <p>Select Time Series to preview on graph</p> */}
            </Card>
          </div>
    </div>
        
    )
};
export default Condition