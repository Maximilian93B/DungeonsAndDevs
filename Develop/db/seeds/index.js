// This will control the execution of the seeding

require('dotenv').config({path: '../../../.env'});
const sequelize = require('../../config/connection');


// Import seed functions 
const seedUsers = require('./userSeeds');
const seedTerritories = require('./territorySeeds');
const seedProvinces = require('./provinceSeeds');
const seedChallenges = require('./challengeSeeds');
const seedTrophies = require('./trophySeeds');;
const seedUserProgress = require('./userProgressSeeds');
const seedUserProfiles = require('./userProfileSeeds');
const seedUserTerritories = require('./userTerritorySeeds');
const seedUserAchievement = require('./userAchievementSeeds');
const seedUserTrophies = require('./userTrophySeeds');



// Async seed function to call all seed functions 


const seedAll = async () => {
    try{
        await sequelize.sync({force: false}); // chang for production 
        console.log('Database synced');

        // Seed Users
        console.log('Starting user seeding...');
        await seedUsers();
        
        // Seed Territories 
        console.log('Starting territory seeding...');
        await seedTerritories();
     
    
        // Provinces Seed
        console.log('Starting province seeding...');
        await seedProvinces();
    
       
        // Seed Challenges 
        console.log('Starting Challenges seeding...');
        await seedChallenges();
       
    
        // Trophies Seed 6
        console.log('Starting Trophies seeding...');
        await seedTrophies();
      

        // User Territories Seed 
        console.log('Starting User Territories seeding...');
        await seedUserTerritories ();
   
    
        /// Seed User Progress
        console.log('Starting user_progress seeding...');
        await seedUserProgress();
       

        // Seed User Achievements
        console.log('Starting User Achievement seeding...');
        await seedUserAchievement();

        // Seed User Profile 
        console.log('Starting User Profile Seeding...');
        await seedUserProfiles();
        
        // Seed User Trophies 
        console.log('Starting User Trophies Seeding...');
        await seedUserTrophies();



        console.log('User seeded...');
        console.log('Territories seeded...');
        console.log('Provinces seeded...');
        console.log('Challenges seeded...');
        console.log('Trophies seeded...');
        console.log('User Territories seeded...');
        console.log('user_progress seeded...');
        console.log('user_achievements seeded...');
        console.log('user_profile seeded...');
        console.log('user_trophies Seeded...');
        
        
        console.log('Seeding complete...');
      

        console.log('Let the games begin....')
    
        
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedAll();