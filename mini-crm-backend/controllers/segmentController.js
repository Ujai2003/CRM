const mysql = require('mysql');
const db = require('../config/db');  // Database connection (ensure it's set up)

// Controller for creating a new segment
exports.createSegment = (req, res) => {
    const { name, conditions } = req.body; // Expecting name and conditions in the request body
    
    // Validate the input
    if (!name || !conditions) {
        return res.status(400).json({ message: 'Name and conditions are required.' });
    }

    // Insert the segment into the database
    const query = 'INSERT INTO segments (name, conditions) VALUES (?, ?)';
    db.query(query, [name, JSON.stringify(conditions)], (err, result) => {
        if (err) {
            console.error('Error inserting segment:', err);
            return res.status(500).json({ message: 'Error creating segment' });
        }

        // Send back the created segment data
        res.status(201).json({
            id: result.insertId,
            name,
            conditions,
            created_at: new Date().toISOString(),
        });
    });
};

// Controller for retrieving all segments
exports.getSegments = (req, res) => {
    const query = 'SELECT * FROM segments ORDER BY created_at DESC';
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching segments:', err);
            return res.status(500).json({ message: 'Error fetching segments' });
        }

        res.status(200).json(results);
    });
};

// Controller for calculating audience size based on segment conditions
exports.calculateAudienceSize = (req, res) => {
    const { conditions } = req.body;

    // Generate the dynamic query based on the conditions
    // Here, you can implement the logic to calculate the audience based on conditions (spending, visits, etc.)
    // For example, if conditions include spending > 10000, create the query accordingly.

    let query = 'SELECT COUNT(*) as size FROM customers WHERE ';
    const conditionStatements = [];

    // Assuming conditions is an array of objects with field, operator, and value
    conditions.forEach(condition => {
        const { field, operator, value } = condition;
        conditionStatements.push(`${field} ${operator} ${mysql.escape(value)}`);
    });

    query += conditionStatements.join(' AND ');

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error calculating audience size:', err);
            return res.status(500).json({ message: 'Error calculating audience size' });
        }

        res.status(200).json({ audience_size: results[0].size });
    });
};
