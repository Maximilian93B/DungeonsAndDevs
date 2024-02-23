const express = require('express');
const router = express.Router();
const userProfileController = require ('../../controllers/userProfileController');


 // Route for userProfiles 
 router.get('/userProfiles', userProfileController.getAllUserProfiles);


// Route for single user profile by ID 
 router.get('/:id', userProfileController.getUserProfile);



module.exports = router; 
