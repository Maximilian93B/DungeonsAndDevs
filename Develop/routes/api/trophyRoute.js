const express = require('express');
// Import the Trophy model
const { Trophy } = require('../../Models/models'); // Adjust the path as necessary to match your file structure
// Create a new Router instance
const router = express.Router();

router.get('/', async (req, res) => {
    console.log('Accessing Trophy Route');

    try {
        const trophies = await Trophy.findAll();
        console.log('Fetched Trophies:', trophies);
        res.json(trophies);
    } catch (error) {
        console.error('Failed to get Trophies:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
