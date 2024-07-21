import logo from './logo.svg';
import './App.css';
import AlertsManagement from './Component/AlertsManagement';
import MonitorAllAlerts from './Component/MonitorAllAlerts';
import AlertManagementDashboard from './Component/AlertManagementDashboard';
import PercentageCPUAlert from './Component/PercentageCPUAlerts';
import Summary from './Component/Pages/Summary';
import History from './Component/Pages/History';
import Diagnostics from './Component/Pages/Diagnostics';
import { Route, Routes } from 'react-router-dom';
import Tickets from './Component/Tickets';
import AlertRuleBuilder from './Component/AlertRuleBuilder';
import Threshold from './Component/Pages/Threshold';


function App() {
  return (
    <div className='App'>
      <header></header>
      <Routes>
              <Route path='/' element={<AlertManagementDashboard/>}/>
              <Route exact path="/monitorallalerts"  element={<MonitorAllAlerts/>}  ></Route>
              <Route  path="/alertsmanagement"  element={<AlertsManagement/>}></Route>
              <Route  path="/percentagecpualert"   element={<PercentageCPUAlert/>}  ></Route>
              <Route  path="/percentagecpualert/summary"  element={<Summary />}  ></Route>
              <Route path="/percentagecpualert/history" element={<History/>}></Route>
              <Route path="/percentagecpualert/diagnostics" element={<Diagnostics/>}></Route>
              <Route path="/monitorallalerts/tickets" element={<Tickets/>}/>
              <Route path="/alertsmanagement/alertrulebuilder" element={<AlertRuleBuilder/>}/>
              <Route path='/threshold' element={<Threshold/>}/>
              
            </Routes>
    </div>
  );
}

export default App;


