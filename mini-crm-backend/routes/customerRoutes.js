const express = require('express');
const router = express.Router(); // Create the router
const Customer = require('../models/Customer');

// POST route for creating a customer
router.post('/', async (req, res) => {
  const { name, email, phone, address } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).send('Name and Email are required');
  }

  // Optional: Additional validation for email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid email format');
  }

  try {
    // Assuming Customer.create is asynchronous (e.g., using promises or async/await)
    await Customer.create(req.body);
    res.status(201).send({ message: 'Customer created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
