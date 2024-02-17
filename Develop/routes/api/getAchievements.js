// Import necessary modules
const express = require('express');
const router = express.Router();
const UserAchievement = require('../../Models/achievement'); // Adjust the path as per your file structure

// Define a GET route for '/achievements' to fetch all achievements
router.get('/', async (req, res) => {
    console.log('Accessing /achievements route');

    try {
        // Use the Sequelize `findAll` method to retrieve all achievements
        const achievements = await UserAchievement.findAll();
        console.log('Fetched achievements: ', achievements);
        
        // Respond with the retrieved achievements as JSON
        res.json(achievements);
    } catch (error) {
        // If an error occurs
        console.error('Failed to fetch achievements:', error);
        // Send a 500 Server Error
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;