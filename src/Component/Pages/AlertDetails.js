import React from "react";
import "../Style/AlertRuleBuilder.css";
import {Button, Form, Input} from "antd";

function AlertDetails(){
    const { TextArea } = Input
    return(
        <div>
            <div className="rule-builder-form">
            <Button disabled className="frm-rule-btn">Save Rule</Button>
            <Form layout="vertical" className="rule-form">
                <Form.Item >
                    
                 <label className="rule-frm-lbl"> NAME THIS ALERT RULE </label>
                <Input placeholder="Placeholder" />
                 </Form.Item>
                <Form.Item>
                 <label  className="rule-frm-lbl">DISCRIPTION</label>
                <TextArea rows={10} placeholder="Placeholder"/>
                 </Form.Item>
            </Form>
         </div>
        </div>
    )
};
export default AlertDetails;