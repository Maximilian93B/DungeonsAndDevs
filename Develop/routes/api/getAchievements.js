// Import necessary modules
const express = require('express');
const router = express.Router();
const { Achievement }  = require('../../Models/models'); // Adjust the path as per your file structure

// Define a GET route for '/achievements' to fetch all achievements
router.get('/', async (req, res) => {
    console.log('Accessing /achievements route');
    try {
        // Use the Sequelize `findAll` method to retrieve all achievements
        const achievements = await Achievement.findAll();
        console.log('Fetched achievements: ', achievements);
        // Respond with the retrieved achievements as JSON
        res.json(achievements);
    } catch (error) {
        // If an error occurs
        console.error('Failed to fetch achievements:', error);
        // Send a 500 Server Error
        res.status(500).send('Server Error GET achievements');
    }
});

// Exact same logic applies to the route but we are using findByPk (primaryKey)
router.get('/:id', async (req, res) => {
    const achievementId = req.params.id;
    console.log('Fetching Achivement ID')
    
    try{
        const achievement = await Achievement.findByPk(achievementId);
        if(achievement) {
            console.log('Achievment Fetched:',achievement);
            res.json(achievement);
        } else {
            res.status(404).send('Achievement not found');
        }
    } catch (error) {
        console.error('Achivement not fund:', error);
        res.status(500).send('Server Error GET Achievemnet by ID')
    }
});

// Export the router
module.exports = router;