// Import modules
const express = require('express');
// Import the Territory model
const { Province, Territory } = require('../../Models/models');
// Create a new Router instance
const router = express.Router();

// GET route to fetch provinces 

router.get ('/', async (req, res) => {
    try {
        // fetch all provinces using sequeslize and Province Model
        const provinces = await Province.findAll ( {
            incldue: [{ model: Territory }]
        });
        res.json(provinces);
        console.log(provinces);
    } catch (error) {
        console.error('Failed to fetch provinces:', error);
        res.status(500).send ('Server Error',);
    } 
}); 


module.exports = router;