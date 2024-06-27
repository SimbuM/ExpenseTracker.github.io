import React from 'react';

const ExpenseCard = ({ expense }) => {
  return (
    <div className="expense-card">
      <h3>{expense.description}</h3>
      <p>RS {expense.amount}</p>
    </div>
  );
};

export default ExpenseCard;
