import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  dealList: {
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

function DealList() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/deals')
      .then(response => setDeals(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={styles.dealList}>
      <h2>Deals</h2>
      <ul>
        {deals.map(deal => (
          <li key={deal._id} style={styles.listItem}>{deal.title} - ${deal.amount} - {deal.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default DealList;
