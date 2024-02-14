// Aggregate Route file 
const express = require('express');
const router = express.Router();

//Import route files here 
const authRoutes = require('./api/authRoutes');
const dashboardRoute = require('./api/dashboardRoute');
const getUsers = require('./api/getUsers');
const regieRoutes = require('./api/regieRoutes')
const getTerritories = require('./api/getTerritories');
const getProvince = require('./api/provinceRoutes');
const userAchievementRoutes = require('./Develop/routes/api/userAchievementroute');




// Add imported routes here  
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoute);
router.use('/users', getUsers);
router.use('/register', regieRoutes);
router.use('/territories', getTerritories);
router.use('/provinces', getProvince);
router.use('/userachievements', userAchievementRoutes);


module.exports = router; 

