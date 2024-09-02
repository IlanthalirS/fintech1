import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  clientList: {
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

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={styles.clientList}>
      <h2>Clients</h2>
      <ul>
        {clients.map(client => (
          <li key={client._id} style={styles.listItem}>{client.name} - {client.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ClientList;
