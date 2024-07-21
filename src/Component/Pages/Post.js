import React from "react";
import {Form, Input} from "antd";
import "../Style/Post.css";
function Post (){
    return(
        <div>
            <p className="post-lbl">Parameters For This Alert Handler</p>
            <Form layout='vertical'>
    <Form.Item className="post-input" label="HTTP endpoint for POST request">
    <Form.Item style={{
              width: "100%",
            }}>
          <Input placeholder="Placeholder"/>
        </Form.Item>
    </Form.Item>    
    <Form.Item
      label="Header Key"
      style={{
        marginTop: -30,
        marginBottom: 0,
      }}
    >
      <Form.Item
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
        }}
      >
        <Input placeholder="Placeholder" />
      </Form.Item>
      <Form.Item className="post-input"
       label="Header Value"
        style={{
          display: 'inline-block',
          width: 'calc(50% - 8px)',
          margin: '0 8px',
          marginTop:"-35px"
        }}
      >
        <Input placeholder="Placeholder" />
      </Form.Item>
    </Form.Item>
  </Form>
        </div>
    )
};
export default Post;

