import React, { useState, useEffect } from 'react';
import ExpenseCard from '../components/ExpenseCard';

const Home = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      { id: 1, description: 'Groceries', amount: 50 },
      { id: 2, description: 'Electricity Bill', amount: 75 },
    ]);
  }, []);

  return (
    <div className="home">
      <h1>Expense List</h1>
      <div className="expense-list">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};

export default Home;
