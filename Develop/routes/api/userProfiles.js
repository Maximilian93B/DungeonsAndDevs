const express = require('express');
const router = express.Router();
 const userProfileController = require ('../../controllers/userProfileController');


 // Route for userProfiles 

 router.get('/', userProfileController.getUserProfile);


module.exports = router; 
