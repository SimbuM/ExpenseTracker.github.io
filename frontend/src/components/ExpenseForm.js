import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('Credit');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ title, description, amount, date, transactionType });
    setTitle('');
    setDescription('');
    setAmount('');
    setDate('');
    setTransactionType('Credit');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Expense Management</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        value={transactionType}
        onChange={(e) => setTransactionType(e.target.value)}
        required
      >
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
