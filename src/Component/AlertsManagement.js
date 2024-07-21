 import react, {useState} from "react";
import { Table, Checkbox, Input, Button, Select, Menu, Dropdown, Breadcrumb } from 'antd';
import { Link } from "react-router-dom";
import{ InfoCircleOutlined, CodepenCircleOutlined, MoreOutlined, PlusOutlined, DownCircleFilled} from "@ant-design/icons"
import AlertsData from "./Data/AlertsData.json";
import "./Style/AlertsManagement.css";
function AlertsManagement (){
  const [searchvalue, setSearchvalue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [tableData, setTableData] = useState(AlertsData);

  const handleSearch = (value) => {
    setSearchValue(value);
    const newData = AlertsData.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(value.toLowerCase())
      )
    );
    setTableData(newData);
  };


  const items=[
    {
      label:"Delete",
      key:"1",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Archive",
      key:"2",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Processed",
      key:"3",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Disable Rule",
      key:"4",
      icon:<CodepenCircleOutlined/>
    }
  ]
  const {Search} = Input;
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (_, record) => (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Checkbox style={{ marginRight: 8 }} />
          {record.name}
        </span>
      ),
      // filteredValue: [searchvalue],
      //   onFilter: (value, AlertsData) =>{
      //     return(
      //       String(AlertsData.name)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(AlertsData.condition)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(AlertsData.status)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(AlertsData.targetresource)
      //         .toLowerCase()
      //         .includes(value.toLowerCase())
           
      //     );
      //   }
    },
    {
      title: 'Condition',
      dataIndex: 'condition',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      render: (text) => (
        <span style={{color:"green"}}>{text}</span>
      ),
    },
    {
        title: 'Target Resource',
        dataIndex: 'targetresource',
      },
      {
        title: 'Action',
        dataIndex: 'action',
        render: (_, record) => (
          <>
                    
            <Dropdown
             menu={{items}} 
             trigger={['click']}>
             {record.action === 'MoreOutlined' && <MoreOutlined style={{ marginRight: 8 }} />}
            </Dropdown>
          </>
        ),
        
      },
  ];
  
  const Bulkactiondata = (
    <Menu>
      <Menu.Item key="1" icon={<DownCircleFilled />}>Delete</Menu.Item>
      <Menu.Item key="2" icon={<DownCircleFilled />}>Archive</Menu.Item>
      <Menu.Item key="3" icon={<DownCircleFilled />}>Processed</Menu.Item>
      <Menu.Item key="4" icon={<DownCircleFilled />}>Disable Rule</Menu.Item>
      
    </Menu>
  );

 
    return(
         <div className="main-div">
          <div>
          <Breadcrumb className="monitoralert-breadcrumb">
             <Breadcrumb.Item >{<Link to="/" style={{color:" #383874"}}> Home </Link>} </Breadcrumb.Item>
             <Breadcrumb.Item style={{color: "#384CFF"}}>Monitor | Alert Rules</Breadcrumb.Item>
          </Breadcrumb>
            <h4 className="alert-title">MONITOR | ALERTS</h4>
              <div >
              <div className="resource-div">
                {/* <label className="resource-label">Resource Group <InfoCircleOutlined /></label> */}
                <label>Resource <InfoCircleOutlined /></label><br/>
                <Select className="resource-select"
                  placeholder="Select Resource Group"
                  //  options={[
                  //     {
                  //       value: 'jack',
                  //       label: 'Jack',
                  //     },
                  //     {
                  //       value: 'lucy',
                  //       label: 'Lucy',
                  //     },
                  //     {
                  //       value: 'tom',
                  //       label: 'Tom',
                  //     },
                  //   ]}
                  />
              
             
                {/* <Select
                  placeholder="Select Resource "/> */}
                  </div>
              <div>
                <Button className="alert-rule-btn" icon={<PlusOutlined />}>{<Link to="/alertsmanagement/alertrulebuilder">New Alert Rule</Link>}</Button>
              </div>
            </div>
          </div>
          <div className="table-div">
          <div className="table-tittle-div" >
            <label className="table-label">24 Rules / 20 Enabled</label>
            <Dropdown overlay={ Bulkactiondata}
              >
            <Button className="bulk-action-btn">Bulk Action</Button>
            </Dropdown>
            <Search className="tabel-search"
              placeholder="search"
              onChange={(e)=> handleSearch(e.target.value)}
              />
            
          </div>
            <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            bordered
            />
            </div>
         </div>
     )
 };
 export default AlertsManagement;



