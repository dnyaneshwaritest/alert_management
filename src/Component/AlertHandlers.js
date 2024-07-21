import React, { useState } from "react";
import { Button, Card, Dropdown, Menu, Tabs, Space } from "antd";
import { CaretDownOutlined, CodepenCircleOutlined, CloseOutlined } from "@ant-design/icons";
import "./Style/AlertHandlers.css";
import Post from "./Pages/Post";
import TCP from "./TCP";

const { TabPane } = Tabs;

function AlertHandlers() {
  const dropdownMenu = [
    "Post",
    "tcp",
    "exec",
    "log",
    "slack(default)",
    "email",
    "alert",
    "hipchart",
    "kafka (local host)",
    "opsGenie",
    "Pushover"
  ];

  const [selectedHandler, setSelectedHandler] = useState([]);
  const [tabPosition, setTabPosition] = useState('left')

  const handleMenuClick = (e) => {
    setSelectedHandler(prevSelectedHandler => {
      if (!prevSelectedHandler.includes(e.key)) {
        return [...prevSelectedHandler, e.key];
      }
      return prevSelectedHandler;
    });
  };

  const handleTabChange = (key) => {
    setSelectedHandler(selectedHandler.filter((item) => item !== key));
  };

  const renderContent = (key) => {
    switch (key) {
      case "Post":
        return <Post />;
      case "tcp":
        return <TCP/>;
      case "exec":
        return <TCP/>;
      case "log":
        return <TCP/>;
      case "slack":
        return <TCP/>;
      case "email":
        return <TCP/>;
      case "alert":
        return <TCP/>;
      case "hipchart":
        return <TCP/>;
      case "kafka":
        return <TCP/>;
      case "opsGenie":
        return <TCP/>;
      case "Pushover":
        return <TCP/>
      default:
        return null;
    }
  };

  const closeTab = (e, key) => {
    e.stopPropagation();
    setSelectedHandler(selectedHandler.filter((item) => item !== key));
  };
  const renderTabTitle = (title) => (
    <div>
      {title}
      <CloseOutlined style={{ marginLeft: 40, fontSize:"10px", color:"#FF2D2E" }} onClick={(e) => closeTab(e, title)} />
    </div>
  );
  const AddAnotherHandler = (
    <Menu
      className="add-another-handler-dropdown-menu"
      onClick={handleMenuClick}
    >
      {dropdownMenu.map((item) => (
        <Menu.Item key={item} style={{ color: "#383874" }}>
          <CodepenCircleOutlined style={{ marginRight: "5px" }} /> {item}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div className="rule-builder-form">
        <label className="alert-type-lbl">Alert Handlers</label>
        <Button disabled className="frm-rule-btn">
          Save Rule
        </Button>
        <div className="cndtn-crd">
          <Card
            title="Send this Alert to :"
            extra={
              <div className="add-another-handler-dropdown">
                <Dropdown overlay={AddAnotherHandler} trigger={["click"]} >
                  <div className="add-another-handler-dropdown-lbl">
                    Add another handler
                    <CaretDownOutlined
                      className="cndtn-down-icon"
                      style={{ marginLeft: "5px" }}
                    />
                  </div>
                </Dropdown>
                </div>
            }
          >
            <Tabs onChange={handleTabChange} tabPosition={tabPosition} className="add-another-handler-dropdown-dsply-lbl">
            {selectedHandler.map((key, index) => (
              <TabPane tab={renderTabTitle(key)} key={index} >
                {renderContent(key)}
              </TabPane>
              ))}
          </Tabs>            
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AlertHandlers;


