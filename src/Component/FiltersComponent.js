import react, {useState} from "react";
import { Dropdown, Select, Button, Divider,Form, TreeSelect, Menu, Checkbox, Tag} from "antd";
import "./Style/FilterComponent.css";
import {CloseCircleOutlined} from "@ant-design/icons";

const {TreeNode} = TreeSelect;

 function FilterComponent({ onSubmit, onCloseTag1, onCloseTag2, onCloseTag3, onCloseProductTag1, onCloseElementTag1, onClosleBusinessProduct, onCloseEnvironment,onCloseModuleTag, onCloseServicesTag, onCloseAlertStateTag, onCloseAlertType }){
    const [selectedValues, setSelectedValues] = useState([]);
    const [selectedValues1, setSelectedValues1] = useState([]);
    const [selectProductValue, setSelectProductValue] =useState([]);
    const [selectElementValue, setSelectElementValue]= useState([]);
  const [selectedValues2, setSelectedValues2] = useState([]);
  const [selectBusinessProduct, setSelectBusinessProduct] = useState([]);
  const [selectEnvironment, setSelectEnvironment] = useState([]);
  const [selectModuleValue, setSelectModuleValue] = useState([]);
  const [selectServices, setSelectServices] = useState([]);
  const [selectAlertState, setSelectAlertState] = useState([]);
  const [selectedValues3, setSelectedValues3] = useState([]);
  const [selectAlertType, setSelectAlertType] = useState([]);

  const handleClearButtonClick = () => {
    setSelectedValues1([]);
    setSelectProductValue([]);
    setSelectElementValue([]);
    setSelectedValues2([]);
    setSelectBusinessProduct([]);
    setSelectEnvironment([]);
    setSelectModuleValue([]);
    setSelectServices([]);
    setSelectAlertState([]);
    setSelectedValues3([]);
    setSelectAlertType([]);
  };

  const handleSubmit = () => {
    onSubmit(selectedValues1,  selectedValues2, selectedValues3, selectElementValue, selectProductValue, selectBusinessProduct, selectEnvironment, selectModuleValue, selectServices, selectAlertState, selectAlertType);
  };

  const handleTagClose1 = (value) => {
    onCloseTag1(value);
  };

  const handleTagProductClose1 = (value) => {
    onCloseProductTag1(value);
  };

  const handleTagElementClose1 = (value) => {
    onCloseElementTag1(value);
  };


  const handleTagClose2 = (value) => {
    onCloseTag2(value);
  };

  const handleEnvironmentTagClose = (value)=>{
    onCloseEnvironment(value);
  };

  const handleBusinessTagClose = (value) =>{
    onClosleBusinessProduct(value);
  };

  const handleModuleTagClose = (value)=>{
    onCloseModuleTag(value);
  };

  const handleServicesTagClose=(value)=>{
    onCloseServicesTag(value);
  };

  const handleTagClose3 = (value) => {
    onCloseTag3(value);
  };

  const handleAlertStateTagClose = (value)=>{
    onCloseAlertStateTag(value);
  };

  const handleAlertTypeTagClose =(value)=>{
    onCloseAlertType(value);
  };

   
    const infralandingzoneData= [
        {
          label:"AWS (657907747554) ",
          value:"aws(657907747554)",
          key: "1",
          
        },
        {
            label:"AWS (657907747554) ",
            value:"aws(657907747553)",
            key:"2",
            
          },
          {
            label:"AWS (657907747554) ",
            value:"aws(657907747554)",
            
          },
          {
            label:"AWS (657907747554) ",
            value:"aws(657907747554)",
            
          }
    ]
     const productenclavedata=[
        {
            label:"8 VPC",
            value:"8VPC",
            
        },
        {
            label:"8 VPC",
            value:"8VPC",
            
        },
        {
            label:"8 VPC",
            value:"8VPC",
            
        }
     ]
     const elementdata=[
        {
            label:"EC2",
            value:"ec2",
        },
        {
            label:"Lambda",
            value:"lambda",
        },
        {
            label:"EKS",
            value:"eks",
        },
        {
            label:"ECS",
            value:"ecs",
        },
        {
            label:"DynamoDB",
            value:"dynamodb",
        },
        {
            label:"Redshift",
            value:"redshift",
        }
     ]
     const departmentdata =[
        {
            label:"HR",
            value:"hr",
            // key:"hr",
        },
        {
            label:"Finance",
            value:"finance",
        },
        {
            label:"Procurement",
            value:"procurement",
        },
        {
            label:"Inventory Department",
            value:"inventorydepartment",
        }
     ]
     const productdata=[
        {
            label:"HRMS",
            value:"hrms",
        }
     ]
     const environmentdata = [
        {
            label:"Department",
            value:"department",
        }
     ]
     const moduledata=[
        {
            label:"Payroll Management",
            value:"payrollmanagement",
        },
        {
            label:"Leave Management",
            value:"leavemanagement",
        },
        {
            label:"Onboarding Management",
            value:"onboardingmanagement",
        }
     ]
    const servicedata =[
        {
            label:"Go Lang",
            value:"golang",
        },
        {
            label:"Java",
            value:"java",
        },
        {
            label:"Node.js",
            value:"node.js",
        },
        {
            label:"MangoDB",
            value:"mangodb",
        }
    ]
    const serveritydata=[
        {
            label:"Low",
            value:"low",
        },
        {
            label:"Medium",
            value:"medium",
        },
        {
            label:"High",
            value:"high",
        }
    ]

    const alertstatedata=[
        {
            label:"New Generated",
            value:"newgenerated",
        },
        {
            label:"In Process",
            value:"inprocess",
        },
        {
            label:"Processed",
            value:"processed",
        },
        {
            label:"Archived",
            value:"aarchived",
        }
    ]
     const alerttypedata=[
        {
            label:"CPU Percentage",
            value:"cpupercentage",
        },
        {
            label:"Network In",
            value:"networkin",
        },
        {
            label:"Network Out",
            value:"networkout",
        },
        {
            label:"Disk Red Bytes",
            value:"diskredbytes",
        }
     ]
    return(
        <div >
            <Form
           
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 8,
        }}
         layout="vertical"
        // style={{
        //   maxWidth: 600,
        // }}
      >
        <Form.Item label="Infra" className="infra-label"  >
            <div className="filter-div">
          <TreeSelect style={{width:"200px"}}
          className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectedValues1}
            // dropdownStyle={{ maxWidth: 400, overflow: 'auto' }}
            placeholder="Landing Zone"
            onChange={value => setSelectedValues1(value)}
            treeData={infralandingzoneData}
          /> 
           <TreeSelect style={{width:"200px"}}
          className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectProductValue}
            // dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Product Enclave"
            // onChange={value => setSelectedValues1(value)}
            onChange={value => setSelectProductValue(value)}
            treeData={productenclavedata}
            key={10}
          />
          <TreeSelect style={{width:"200px"}}
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectElementValue}
            // dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Elements"
            // onChange={value => setSelectedValues1(value)}
            onChange={value => setSelectElementValue(value)}
            treeData={elementdata}
            key={11}
          />
          </div>
        </Form.Item>
        <Divider/>

        <Form.Item label="Business">
        <div className="filter-div">
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
           value={selectedValues2}
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Department"
            onChange={value => setSelectedValues2(value)}
            treeData={departmentdata}
          />
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectBusinessProduct}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Product"
            onChange={value => setSelectBusinessProduct(value)}
            treeData={productdata}
          />
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectEnvironment}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Environment"
            onChange={value => setSelectEnvironment(value)}
            treeData={environmentdata}
          /> <br/>
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectModuleValue}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Module"
            onChange={value => setSelectModuleValue(value)}
            treeData={moduledata}
          />
          <TreeSelect style={{width:"200px"}}
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectServices}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Services"
            onChange={value => setSelectServices(value)}
            treeData={servicedata}
          />
            </div>
        </Form.Item>
        <Divider/>
        <Form.Item label="Filters">
        <div className="filter-div">
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectedValues3}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Severity"
            onChange={value => setSelectedValues3(value)}
            treeData={serveritydata}
          />
          <TreeSelect style={{width:"200px"}}
           className="infra-dropdown"
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectAlertState}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Alert State"
            onChange={value => setSelectAlertState(value)}
            treeData={alertstatedata}
          />
          <TreeSelect style={{width:"200px"}}
            showCheckedStrategy={TreeSelect.SHOW_ALL}
            treeCheckable={true}
            value={selectAlertType}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="Alert Type"
            onChange={value => setSelectAlertType(value)}
            treeData={alerttypedata}
          />
          </div>
        </Form.Item>
            
        <Form.Item wrapperCol={{ offset: 4, span: 14 }} className="filter-btn">
          <Button type="primary" onClick={handleSubmit} style={{marginRight:"40px"}} >
            Submit
          </Button>
          <Button type="primary" onClick={handleClearButtonClick}>
            Clear
          </Button>
        </Form.Item>
      </Form>



      <div style={{ marginTop: '20px' }}>
        <div>
          Infra:
          {selectedValues1.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose1(value)}>
              {value}
            </Tag>
          ))}
        </div>

            {/* handleTagProductClose1 */}
        <div>
           {selectProductValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagProductClose1(value)}>
              {value}
            </Tag>
          ))}
        </div>
        
        {/* handleTagElementClose1 */}
        <div>
         
          {selectElementValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagElementClose1(value)}>
              {value}
            </Tag>
          ))}
        </div>
        <div>
          Business:
          {selectedValues2.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose2(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleBusinessTagClose */}
        <div>
          {/* Business: */}
          {selectBusinessProduct.map((value, index) => (
            <Tag key={index} closable onClose={() => handleBusinessTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>

        <div>
          {/* Business: */}
          {selectEnvironment.map((value, index) => (
            <Tag key={index} closable onClose={() => handleEnvironmentTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>

        {/* handleModuleTagClose */}

        <div>
          {/* Business: */}
          {selectModuleValue.map((value, index) => (
            <Tag key={index} closable onClose={() => handleModuleTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>

        {/* handleServicesTagClose */}
        <div>
          {/* Business: */}
          {selectServices.map((value, index) => (
            <Tag key={index} closable onClose={() => handleServicesTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>

        <div>
          Filters:
          {selectedValues3.map((value, index) => (
            <Tag key={index} closable onClose={() => handleTagClose3(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* onCloseAlertStateTag */}
        <div>
          {/* Filters: */}
          {selectAlertState.map((value, index) => (
            <Tag key={index} closable onClose={() => handleAlertStateTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
        {/* handleAlertTypeTagClose */}
        <div>
          {/* Filters: */}
          {selectAlertType.map((value, index) => (
            <Tag key={index} closable onClose={() => handleAlertTypeTagClose(value)}>
              {value}
            </Tag>
          ))}
        </div>
      </div>
        </div>
    )
 };

 export default FilterComponent;





