import { useEffect, useState } from 'react';
import axios from 'axios';

const styles = {
  expenseList: {
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

function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then(response => setExpenses(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={styles.expenseList}>
      <h2>Expenses</h2>
      <ul>
        {expenses.map(expense => (
          <li key={expense._id} style={styles.listItem}>{expense.category} - ${expense.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
