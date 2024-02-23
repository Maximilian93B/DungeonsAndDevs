// Import modules
const express = require('express');
// Import the Territory model
const { Challenge } = require('../../Models/models'); // Ensure this path correctly matches your file structure
// Create a new Router instance
const router = express.Router();


// Define a GET route for '/territories' to fetch all territories
router.get('/', async (req, res) => {
    console.log('Accessing /challenges route');

    try {
        // Use the Sequelize `findAll` method to retrieve all territories
        const challenges = await Challenge.findAll();
        console.log ('Fetched challenges: ', challenges)
        // Respond with the retrieved territories as JSON to use on the front end
        res.json(challenges);
    } catch (error) {
        // If an error occurs
        console.error('Failed to fetch challenges:', error);
        // Send a 500 Server Error
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;

