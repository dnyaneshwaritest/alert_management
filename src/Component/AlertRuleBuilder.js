import React, {useState} from "react";
import "./Style/AlertRuleBuilder.css";
import {Button, message, Steps, theme, } from "antd";
import AlertDetails from "./Pages/AlertDetails";
import Condition from "./Condition";
import AlertType from "./AlertType";
import AlertHandlers from "./AlertHandlers";
import {Link } from 'react-router-dom';
import Message from "./Message";
const steps = [
    {
      title: 'Alert Details',
      content: <AlertDetails/>,
    },
    {
      title: 'Alert Type',
      content: <AlertType/>,
    },
    {
      title: 'Conditions',
      content: <Condition/>,
    },
    {
      title: 'Alert Handlers',
      content: <AlertHandlers/>,
    },
    {
      title: 'Message',
      content: <Message/>,
    },
  ];
function AlertRuleBuilder(){
    const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
    return(
       <div> 
            <div className="rule-builder-div">
                <label className="rule-builder-lbl">Alert rule builder</label>
                <Button type="primary" className="rule-builder-back-btn"><Link to="/alertsmanagement">Back</Link></Button>
            </div>
            <div >
            <Steps size="small" current={current} items={items} className="rule-builder-steps" />
      <div >{steps[current].content}</div>
      <div className="radio-btn-div">
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button  className="frm-nxt-btn" onClick={() => next()}>
            Next
          </Button>
        )}
        {/* {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )} */}
      </div>
       </div>
        </div>
    )
};
export default AlertRuleBuilder;