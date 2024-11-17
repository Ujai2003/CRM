import React, { useState } from 'react';
import api from '../api';

const AddCustomer = () => {
  const [customer, setCustomer] = useState({ name: '', email: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      await api.post('/customers', customer);
      setSuccess('Customer added successfully!');
      setCustomer({ name: '', email: '' }); // Reset form
    } catch (err) {
      setError('Failed to add customer. Please try again.');
    }
  };

  return (
    <div>
      <h2>Add New Customer</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
