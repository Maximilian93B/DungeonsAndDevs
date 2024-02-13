// Import modules
const express = require('express');
// Import the Territory model
const { Territory } = require('../../Models/territory'); // Ensure this path correctly matches your file structure
// Create a new Router instance
const router = express.Router();


// Define a GET route for '/territories' to fetch all territories
router.get('/', async (req, res) => {
    console.log('Accessing /territories route');

    try {
        // Use the Sequelize `findAll` method to retrieve all territories
        const territories = await Territory.findAll();
        console.log ('Fetched territories: ', territories);
        // Respond with the retrieved territories as JSON to use on the front end
        res.json(territories);
    } catch (error) {
        // If an error occurs
        console.error('Failed to fetch territories:', error);
        // Send a 500 Server Error
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;

