import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCustomer from './pages/AddCustomer';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        {/* Global Navigation Bar */}
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/add-customer">Add Customer</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Welcome to Mini CRM</h1>
                {/* Button to navigate to Add Customer */}
                <Link to="/add-customer">
                  <button style={{ marginTop: '20px' }}>Add Customer</button>
                </Link>
              </div>
            }
          />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
