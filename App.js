import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClientList from './components/ClientList';
import ExpenseList from './components/ExpenseList';
import LeadList from './components/LeadList';
import DealList from './components/DealList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout">
        <div className="sidebar">
          <h2>CRM</h2>
          <ul>
            <li><a href="/clients">Clients</a></li>
            <li><a href="/expenses">Expenses</a></li>
            <li><a href="/leads">Leads</a></li>
            <li><a href="/deals">Deals</a></li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/clients" element={<ClientList />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/leads" element={<LeadList />} />
            <Route path="/deals" element={<DealList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
