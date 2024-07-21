import react, {useState} from "react";
import { Table,  Checkbox, Input, Button, Dropdown,Badge,  Select,  Menu, Breadcrumb } from 'antd';
import{  MoreOutlined, DownCircleFilled, CodepenCircleOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import TicketData from "../Component/Data/TicketData.json";
import "./Style/AlertsManagement.css";


function Tickets (){
  const [searchvalue, setSearchvalue] = useState("");
  const [tableData, setTableData] = useState(TicketData);
  console.log(searchvalue);

  const handleSearch = (value)=>{
    setSearchvalue(value);
    const newData = TicketData.filter((item)=>
    Object.values(item).some(
      (val)=>
      typeof val === "string" && val.toLowerCase().includes(value.toLowerCase())
    ) ||
    (Array.isArray(item.severity) && item.severity.some((severity)=>severity.toLowerCase().includes(value.toLowerCase())))
    );
    setTableData(newData);
  };

  const items=[
    {
        label:"Execute Workflow",
        key: "11",
        icon:<CodepenCircleOutlined/>
    },
    {
        label: "Ignore",
        key:"12",
        icon:<CodepenCircleOutlined />
    },
    {
        label:"Manually Close",
        key:"13",
        icon: <CodepenCircleOutlined />
    },
    {
        label:"Create Ticket",
        key: "14",
        icon: <CodepenCircleOutlined />
    }
  ]

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'default';
    }
  };
  

  const {Search} = Input;
  
  const columns = [
    {
      title: 'Ticket',
      dataIndex: 'ticket',
      key:"ticket",
      
      // filteredValue: [searchvalue],
      //   onFilter: (value, TicketData) =>{
      //     return(
      //       String(TicketData.ticket)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(TicketData.severity)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(TicketData.summary)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(TicketData.creator)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(TicketData.category)
      //         .toLowerCase()
      //         .includes(value.toLowerCase()) ||
      //       String(TicketData.site)
      //       .toLowerCase()
      //       .includes(value.toLowerCase())
      //     );
      //   }
        
    },
    {
        title: 'Summary',
        dataIndex: "summary",
        key:"summary"
    },
    {
        title: "Assignee",
        dataIndex:"assignee",
        key:"assignee"
    },
    {
        title: "Creator",
        dataIndex:"creator",
        Key:"creator"
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key:"severity",
      width:"8.2%",
      render: (severity) => (
        <>
          {Array.isArray(severity) ? (
            severity.map((s) => (
              <Badge color={getSeverityColor(s)} key={s} text={severity}/>
              ))
          ) : (
            <Badge color={getSeverityColor(severity)} key={severity} text={severity}/>
              )}
        </>
      ),
      
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    
    },
    {
        title: 'Site',
        dataIndex: 'site',
        key:'site',
      },
      
      {
        title: 'Created',
        dataIndex: 'created',
        key: 'created',
        width:"9%",
    },
      {
        title: 'Updated',
        dataIndex: 'updated',
        key: 'updated',
        width:"9%",
        
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => (
          <>
             <Dropdown
        menu={{items}}
        //   <Menu className="action-dropdown">
        //     <Menu.Item key="11" icon={<DownCircleFilled/>}>Execute Workflow</Menu.Item>
        //     <Menu.Item key="12" icon={<DownCircleFilled/>}>Ignore </Menu.Item>
        //     <Menu.Item key="13" icon={<DownCircleFilled/>}>Manually Close</Menu.Item>
        //     <Menu.Item key="14" icon={<DownCircleFilled/>}>Create Ticket</Menu.Item>
        //   </Menu>
       
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
         {record.action === 'MoreOutlined' && <MoreOutlined style={{ marginRight: 8 }} />}
         </a>
      </Dropdown>
          
            
          </>
        ),
        
      },
  ];
  

    return(
         <div className="main-div">
        
          <div>
          <Breadcrumb className="monitoralert-breadcrumb">
    <Breadcrumb.Item >{<Link to="/" style={{color:" #383874"}}> Home </Link>} </Breadcrumb.Item>
   
    
    <Breadcrumb.Item style={{color: "#384CFF"}}>Monitor | Overview</Breadcrumb.Item>
  </Breadcrumb>
            <h4 className="alert-title">MONITOR | ALL ALERTS</h4>
            
          </div>
          <div className="table-div">
          <div className="table-tittle-div" >
            <label className="table-label">Tickets</label> 
            
                <Select className="resource-select"
                  placeholder="Resource Group"/>         
              <Button className="tckt-btn">New Ticket</Button>
               
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
 export default Tickets;









