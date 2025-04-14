import React, { useState, useEffect } from 'react';
import ExpenseTable from './ExpenseTable';

function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: '',
    date: ''
  });

  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on mount
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save expenses to localStorage when expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = {
      ...formData,
      id: crypto.randomUUID(),
      date: formData.date || new Date().toLocaleDateString()
    };
    setExpenses([...expenses, newExpense]);

    // Clear form after submit
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: '',
      date: ''
    });
  }

  return (
    <div className="expense-form-container">
    <form onSubmit={handleSubmit}>
      <h1>EXPENSE TRACKER</h1>

      <input
        type="text"
        name="name"
        placeholder="Enter expense name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter expense description"
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter expense category"
        value={formData.category}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <button type="submit" id="sub-btn">Submit</button>
    </form>

    <ExpenseTable expenses={expenses} />
  </div>
  );
}

export default ExpenseForm;
