const express = require('express');
const router = express.Router();
const segmentController = require('../controllers/segmentController');

// Route to create a new segment
router.post('/', segmentController.createSegment);

// Route to get all segments
router.get('/', segmentController.getSegments);

// Route to calculate the audience size for a segment
router.post('/calculate-audience', segmentController.calculateAudienceSize);

module.exports = router;
