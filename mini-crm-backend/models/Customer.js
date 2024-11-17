const db = require('../config/database');

const Customer = {
  create: (data, callback) => {
    // Make sure that the 'data' object contains the required fields
    const { name, email, phone, address } = data;

    // SQL query to insert customer data
    const sql = 'INSERT INTO customers (name, email, phone, address) VALUES (?, ?, ?, ?)';

    // Execute the query with sanitized values to prevent SQL injection
    db.query(sql, [name, email, phone, address], callback);
  }
};

module.exports = Customer;
