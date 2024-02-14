// Import modules
const express = require('express');
// Import the userachievements model
const { userAchievements } = require('../../Models/userachievements');
// Create a new Router instance
const router = express.Router();


// Define a GET route  fetch all userachievements
router.get('/', async (req, res) => {
    console.log('Accessing userAchievement route');

    try {
        // Use the Sequelize `findAll` method to retrieve userachievements
        const userAchievements = await userAchievements.findAll();
        console.log ('Fetched userAchievements: ', userAchievements)
        
        res.json(userAchievements);
    } catch (error) {
        // If an error occurs
        console.error('Failed to fetch the Achievements:', error);
        // Send a 500 Server Error
        res.status(500).send('Server Error');
    }
});

// Export the router
module.exports = router;
