import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  leadList: {
    background: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

function LeadList() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/leads')
      .then(response => setLeads(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={styles.leadList}>
      <h2>Leads</h2>
      <ul>
        {leads.map(lead => (
          <li key={lead._id} style={styles.listItem}>{lead.name} - {lead.email} - {lead.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default LeadList;
