const express = require('express');
const router = express.Router();
const { userTerritoriesController } = require('../../controllers/userTerritoriesController');

// Define a route to fetch all user territories data
router.get('/', userTerritoriesController.getallUserTerrData);

// Export the router
module.exports = router;
