import react, {useState, useEffect} from "react";
import { Table, Tag, Checkbox, Input, Button, Dropdown,Badge, Select, Modal, DatePicker, Menu, Breadcrumb } from 'antd';
import{ CodepenCircleOutlined, MoreOutlined,DeleteOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom";
import Monitorallalertdata from "./Data/Monitorallalertdata.json";
import "./Style/AlertsManagement.css";
import FilterComponent from "./FiltersComponent";
function MonitorAllAlerts (){
   const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValues1, setSelectedValues1] = useState([]);
  const [selectProductValue, setSelectProductValue] =useState([]);
  const [selectElementValue, setSelectElementValue]= useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);
  const [selectBusinessProduct, setSelectBusinessProduct] = useState([]);
  const [selectEnvironment, setSelectEnvironment] = useState([]);
  const [selectModuleValue, setSelectModuleValue] = useState([]);
  const [selectServices, setSelectServices] = useState([]);
  const [selectedValues3, setSelectedValues3] = useState([]);
  const [selectAlertState, setSelectAlertState] = useState([]);
  const [selectAlertType, setSelectAlertType] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dataAvailable, setDataAvailable] = useState(false);
  const [tableData, setTableData] = useState(Monitorallalertdata);

  const handleSearch = (value) => {
    setSearchValue(value);
    const newData = Monitorallalertdata.filter((item) =>
      Object.values(item).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(value.toLowerCase())
      ) ||
      (Array.isArray(item.severity) && item.severity.some((severity) => severity.toLowerCase().includes(value.toLowerCase())))
    );
    setTableData(newData);
  };
  
  const handleDataAvailability = () => {
   
    const isDataAvailable = selectedValues1.length > 0 || selectProductValue.length > 0 
    || selectElementValue.length > 0 ||  selectedValues2.length > 0 || selectBusinessProduct.length > 0 
    || selectEnvironment.length > 0 || selectModuleValue.length > 0 || selectServices.length > 0 
    || selectedValues3.length > 0 || selectAlertState.length > 0 || selectAlertType.length > 0 ;
    setDataAvailable(isDataAvailable);
  };

  useEffect(() => {
    handleDataAvailability();
  }, [selectedValues1, selectProductValue, selectElementValue, selectedValues2, selectBusinessProduct, selectEnvironment,
    selectModuleValue, selectServices, selectedValues3, selectAlertState, selectAlertType]);
 
  const handleClearButtonClick = () => {
    setSelectedValues1([]);
    setSelectProductValue([]);
    setSelectElementValue([]);
    setSelectedValues2([]);
    setSelectBusinessProduct([]);
    setSelectEnvironment([]);
    setSelectModuleValue([]);
    setSelectServices([]);
    setSelectedValues3([]);
    setSelectAlertState([]);
    setSelectAlertType([]);
  };
  // console.log(searchvalue);

  const items =
  [
    {
      label:"Execute Workflow",
      key:"11",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Ignore",
      key:"12",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Manually Close",
      key:"13",
      icon:<CodepenCircleOutlined/>
    },
    {
      label:"Create Ticket",
      key:"14",
      icon:<CodepenCircleOutlined/>
    }
  ]

  const handleSubmit = (values1, values2, values3, value4, value5, value6, value7, value8, value9, value10, value11) => {
    
    setSelectedValues1(values1);
    setSelectProductValue(value5)
    setSelectElementValue(value4);
    setSelectedValues2(values2);
    setSelectBusinessProduct(value6)
    setSelectEnvironment(value7);
    setSelectModuleValue(value8);
    setSelectServices(value9);
    setSelectedValues3(values3);
    setSelectAlertState(value10)
    setSelectAlertType(value11);
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleTagClose1 = (value) => {
    setSelectedValues1(selectedValues1.filter(item => item !== value));
  };

  const handleProductTagClose=(value)=>{
    setSelectProductValue(selectProductValue.filter(item=> item !== value));
  }

  const handleelementTagClose = (value) => {
    setSelectElementValue(selectElementValue.filter(item => item !== value));
  };

  const handleTagClose2 = (value) => {
    setSelectedValues2(selectedValues2.filter(item => item !== value));
  };
  const handleBusinessTagClose = (value)=>{
    setSelectBusinessProduct(selectBusinessProduct.filter(item => item !== value));
  };
  
  const handleEnvironmentTagClose = (value)=>{
    setSelectEnvironment(selectEnvironment.filter(item=> item !== value));
  };
  
  const handleModuleTagClose = (value)=>{
    setSelectModuleValue(selectModuleValue.filter(item=> item !== value));
  };

  const handleServicesTagClose=(value)=>{
    setSelectServices(selectServices.filter(item =>item !== value));
  };

  const handleTagClose3 = (value) => {
    setSelectedValues3(selectedValues3.filter(item => item !== value));
  };

  const handleAlertStateTagClose = (value)=>{
    setSelectAlertState(selectAlertState.filter(item=>item!== value));
  };

  const handleAlertTypeTagClose = (value)=>{
    setSelectAlertType(selectAlertType.filter(item => item !== value));
  };

  


  const handleTagClose1FromForm = (value) => {
    setSelectedValues1(selectedValues1.filter(item => item !== value));
  };

  const handleProductTagCloseForm =(value)=>{
    setSelectProductValue(selectProductValue.filter(item => item !== value));
  };

   const handleTagelementCloseFrom = (value) => {
    setSelectElementValue(selectElementValue.filter(item => item !== value));
  };

  const handleTagClose2FromForm = (value) => {
    setSelectedValues2(selectedValues2.filter(item => item !== value));
  };
   
  const handleBusinessTagCloseForm = (value) =>{
    setSelectBusinessProduct(selectBusinessProduct.filter(item => item !== value));
  };

  const handleEnvironmentTagCloseForm = (value)=>{
    setSelectEnvironment(selectEnvironment.filter(item=>item !== value));
  };

  const handleModuleTagCloseForm = (value)=>{
    setSelectModuleValue(selectModuleValue.filter(item=>item!== value));
  };

  const handleServicesTagCloseForm =(value)=>{
    setSelectServices(selectServices.filter(item=>item!== value));
  };
  const handleTagClose3FromForm = (value) => {
    setSelectedValues3(selectedValues3.filter(item => item !== value));
  };

  const handleAlertStateTagCloseForm =(value)=>{
    setSelectAlertState(selectAlertState.filter(item=> item!== value));
  };

  const handleAlertTypeTagCloseForm = (value)=>{
    setSelectAlertType(selectAlertType.filter(item=>item!== value));
  };
 


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
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedTimeframe(value);
  };

  const renderDatePicker = () => {
    if (selectedTimeframe === "custom") {
      return <DatePicker style={{ marginLeft: "10px" }} />;
    }
    return null;
  };

  const {Search} = Input;
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key:"name",
      
      render: (_, record) => (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          <Checkbox style={{ marginRight: 8 }} />
          {/* {record.name} */}
          <Link to={record.address}> {record.name}</Link> 
    
          {/* <Link to="monitorallalerts/percentagecpualert" rel="noopener noreferrer">{record.name}</Link> */}
        </span>
      
        
      ),
        //   filteredValue: [searchvalue],
        // onFilter: (value, Monitorallalertdata) =>{
        //   return(
        //     String(Monitorallalertdata.name)
        //       .toLowerCase()
        //       .includes(value.toLowerCase()) ||
        //     String(Monitorallalertdata.severity)
        //       .toLowerCase()
        //       .includes(value.toLowerCase()) ||
        //     String(Monitorallalertdata.alertstate)
        //       .toLowerCase()
        //       .includes(value.toLowerCase()) ||
        //     String(Monitorallalertdata.affectedresource)
        //       .toLowerCase()
        //       .includes(value.toLowerCase()) ||
        //     String(Monitorallalertdata.assignedworkflow)
        //       .toLowerCase()
        //       .includes(value.toLowerCase())
        //   );
        // }
        
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key:"severity",
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
      title: 'Alert State',
      dataIndex: 'alertstate',
      key: 'alertstate',
    },
    {
        title: 'Affected Resource',
        dataIndex: 'affectedresource',
        key:'affectedresource',
      },
      
      {
        title: 'Triggered Time',
        dataIndex: 'triggeredtime',
        key: 'triggeredtime',
    },
      {
        title: 'Assigned Workflow',
        dataIndex: 'assignedworkflow',
        key: 'assignedworkflow',
        
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => (
          <>
             <Dropdown
             menu={{items}}
             trigger={['click']}>              
         {record.action === 'MoreOutlined' && <MoreOutlined style={{ marginRight: 8 }} />}
      </Dropdown>
            {/* {record.action === 'MoreOutlined' && <MoreOutlined style={{ marginRight: 8 }} />} */}
            
          </>
        ),
        
      },
  ];
  
  const lastweekdata= [
    {
      label:"Today",
      value:"today",
      icon: <CodepenCircleOutlined/>,

    },
    {
      label:"Last Week",
      value:"lastweek",
      icon: <CodepenCircleOutlined/>,

    },
    {
      label:"Last Month",
      value:"lastmonth",
      icon: <CodepenCircleOutlined/>,

    },
    {
      label:"Custom",
      value:"custom",
      icon: <CodepenCircleOutlined/>,
      
    },
  ]
  
  const Bulkactiondata = (
    <Menu>
      <Menu.Item key="1" icon={<CodepenCircleOutlined />}>Delete</Menu.Item>
      <Menu.Item key="2" icon={<CodepenCircleOutlined />}>Archive</Menu.Item>
      <Menu.Item key="3" icon={<CodepenCircleOutlined />}>Processed</Menu.Item>
      <Menu.Item key="4" icon={<CodepenCircleOutlined />}><Link to="/monitorallalerts/tickets">Create Ticket</Link></Menu.Item>
      <Menu.Item key="5" icon={<CodepenCircleOutlined />}>Execute Workflow</Menu.Item>
    </Menu>
  );

    return(
         <div className="main-div">
        
          <div>
          <Breadcrumb className="monitoralert-breadcrumb">
             <Breadcrumb.Item >{<Link to="/" style={{color:" #383874"}}> Home </Link>} </Breadcrumb.Item>
             <Breadcrumb.Item style={{color: "#384CFF"}}>Monitor | Alerts</Breadcrumb.Item>
          </Breadcrumb>
            <h4 className="alert-title">MONITOR | ALL ALERTS</h4>
            <div >
              <div className="resource-div">
                <Button className="monitor-data-filter"  onClick={showModal}>Filter</Button>
                <Button icon={<DeleteOutlined />} className="monitor-data-filter" 
                disabled={!dataAvailable} onClick={handleClearButtonClick}>Clear Filter</Button>
          
              <div style={{ marginTop: '20px' }} className="monitor-allalt-filter-data">
        <div className="monitor-allalt-filter-data">
          {/* Infra: */}
          {selectedValues1.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose1(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleProductTagClose */}
        <div className="monitor-allalt-filter-data">
        {selectProductValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleProductTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        <div className="monitor-allalt-filter-data">
          {/* Infra: */}
          {selectElementValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleelementTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* </div> */}
        <div className="monitor-allalt-filter-data">
         {/* Business: */}
          {selectedValues2.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose2(value)}>
              {value}
            </Tag>
          ))}
        </div>

        <div className="monitor-allalt-filter-data">
         {/* Business: */}
          {selectBusinessProduct.map((value, index) => (
            <Tag key={index} closable onClose={() => handleBusinessTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>

        <div className="monitor-allalt-filter-data">
         {/* Business: */}
          {selectEnvironment.map((value, index) => (
            <Tag key={index} closable onClose={() => handleEnvironmentTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleModuleTagClose */}

        <div className="monitor-allalt-filter-data">
         {/* Business: */}
          {selectModuleValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleModuleTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleServicesTagClose */}

        <div className="monitor-allalt-filter-data">
         {/* Business: */}
          {selectServices.map((value, index) => (
            <Tag key={index} closable onClose={() => handleServicesTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        </div>
        <div className="monitor-allalt-filter-data">
        <div className="monitor-allalt-filter-data">
         {/* Filters: */}
          {selectedValues3.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose3(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleAlertStateTagClose */}
        <div className="monitor-allalt-filter-data">
         {/* Filters: */}
          {selectAlertState.map((value, index) => (
            <Tag key={index} closable onClose={() => handleAlertStateTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleAlertTypeTagClose */}
        <div className="monitor-allalt-filter-data">
         {/* Filters: */}
          {selectAlertType.map((value, index) => (
            <Tag key={index} closable onClose={() => handleAlertTypeTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
      </div>
                
                <Modal 
                  width={944} 
                  height={'350px'}
                 style={{top: 100, left:-130}}
                  visible={modalVisible}
                  footer={false}
                  onCancel={() => setModalVisible(false)}
              
            >
              <FilterComponent 
                onSubmit={handleSubmit}
                onCloseTag1={handleTagClose1FromForm}
                onCloseTag2={handleTagClose2FromForm} 
                onCloseTag3={handleTagClose3FromForm} 
                onCloseProductTag1={handleProductTagCloseForm} 
                onCloseElementTag1={handleTagelementCloseFrom}
                onClosleBusinessProduct={handleBusinessTagCloseForm}
                onCloseEnvironment={handleEnvironmentTagCloseForm}
                onCloseModuleTag={handleModuleTagCloseForm}
                onCloseServicesTag={handleServicesTagCloseForm}
                onCloseAlertStateTag={handleAlertStateTagCloseForm}
                onCloseAlertType={handleAlertTypeTagCloseForm}
                 />
            </Modal>
               </div>
              <div 
              className="timeframe-dropdown">
              <Select style={{width:"150px"}} 
              placeholder=" Timeframe: Last week" 
              options = {lastweekdata} 
              onChange={handleChange} />
              {renderDatePicker()}
                          
              </div>
            </div>
          </div>
          <div className="table-div">
          <div className="table-tittle-div" >
            <label className="table-label">All Alerts</label>
            
            <Dropdown overlay={ Bulkactiondata}
              >
            <Button className="bulk-action-btn">Bulk Action</Button>
            </Dropdown>
           
            <Search className="tabel-search"
              placeholder="search"
              onChange={(e)=> handleSearch(e.target.value)}/>
             </div>
            <Table
            dataSource={tableData}
            columns={columns}
            pagination={false}
            // key="name"
            bordered
            />
            </div>
         </div>
     )
 };
 export default MonitorAllAlerts;









