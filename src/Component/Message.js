import React from "react";
import { Button, Card, } from "antd";
import "./Style/Message.css";

function Message (){
       return(
        <div>
            <div className="rule-builder-form">
                <label className="alert-type-lbl">CONDITIONS</label>
            <Button type="Primary" className="msg-save-rule-btn">Save Rule</Button>
            <Card className="cndtn-crd"
                 title="Message">
                    <Card className="msg-exp-card">
                        <p>Example : </p>                    
                    </Card>
                   <p>Templates :</p>
            </Card>
          </div>
    </div>
        
    )
};
export default Message;