import React, { useState } from 'react';
import ExpenseTable from './ExpenseTable';

function ExpenseForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    amount: ''
  });

  const [expenses, setExpenses] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newExpense = { ...formData, id: crypto.randomUUID(), date: new Date().toLocaleDateString() };
    setExpenses([...expenses, newExpense]);

    
    setFormData({
      name: '',
      description: '',
      category: '',
      amount: ''
      
    });
  }

  return (
    <div>
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
        <input type="date" 
         placeholder='Date'
            name="date"
            value={formData.date}
            onChange={handleChange}
        />

        <button type="submit" id="sub-btn">Submit</button>
      </form>

      {/* Pass expenses to the table */}
      <ExpenseTable expenses={expenses} />
    </div>
  );
}

export default ExpenseForm;
