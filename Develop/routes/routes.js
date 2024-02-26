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
const getChallenge = require('./api/getChallenges')
const googleApi = require('./api/googleApi');
const getAchievement = require('./api/getAchievements')
const userTerritoriesRoute = require('./api/userTerritories');
const userProfileRoute = require('./api/userProfiles');
const trophyRoute =require('./api/trophyRoute')
const updateUserTerritory  = require('./api/update-api/updateUserTerritory');
const getAuthUser = require('./api/getAuthUser');


// Add imported routes here  
router.use('/auth', authRoutes);
router.use('/dashboard', dashboardRoute);
router.use('/users', getUsers,);
router.use('/register', regieRoutes);
router.use('/territories', getTerritories);
router.use('/provinces', getProvince);
router.use('/challenges', getChallenge);
router.use('/achievements', getAchievement);
router.use('/userTerritories', userTerritoriesRoute);
router.use('/user-profiles', userProfileRoute);
router.use('/trophies', trophyRoute);
router.use('/update-user-territory', updateUserTerritory);
router.use('/getUserId', getAuthUser);






// YouTube API route 
router.use('/search', googleApi);



module.exports = router; 

