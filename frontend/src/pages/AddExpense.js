import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import './AddExpense.css'; 

const AddExpense = () => {
  const addExpense = (expense) => {
    console.log('Expense added:', expense);
  };

  return (
    <div className="add-expense-page">
      <div className="left-side">
        <div className="image-container">
          <h2>Welcome to the Expense Tracker</h2>
          <img src="https://media.licdn.com/dms/image/D5612AQGplp7JKG6Iiw/article-cover_image-shrink_720_1280/0/1673950361361?e=2147483647&v=beta&t=NxzErCoXqQ-xwkHJZZkKGKYNA21hJh3oNMUJzNKQr9M" 
          alt="Description" className="expense-image" />
          <p>Keep track of your expenses easily and efficiently</p>
        </div>
      </div>
      <div className="right-side">
        <ExpenseForm addExpense={addExpense} />
      </div>
    </div>
  );
};

export default AddExpense;
