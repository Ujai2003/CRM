const express = require('express');
const customerRoutes = require('./routes/customerRoutes');  // Import the customer routes

const cors = require('cors');

// Initialize the app
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

// Middleware
app.use(express.json());  // Parse JSON request bodies

// Routes
app.use('/api/customers', customerRoutes); // Use customer routes at '/api' endpoint

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
