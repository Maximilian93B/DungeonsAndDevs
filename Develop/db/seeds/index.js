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
//const seedUserProfiles = require('./userProfileSeeds');
const seedUserTerritories = require('./userTerritorySeeds');
const seedUserAchievement = require('./userAchievementSeeds');




// Async seed function to call all seed functions 


const seedAll = async () => {
    try{
        await sequelize.sync({force: false}); // chang for production 
        console.log('Database synced');

        // Seed Users
        console.log('Starting user seeding...');
        await seedUsers();
        console.log('User seeding completed.');
        
        // Seed Territories 
        console.log('Starting territory seeding...');
        await seedTerritories();
        console.log('Territory seeding completed.');
    
        // Provinces Seed
        console.log('Starting province seeding...');
        await seedProvinces();
        console.log('Province seeding completed.');
       
        // Seed Challenges 
        console.log('Starting Challenges seeding...');
        await seedChallenges();
        console.log('Challenge seeding completed.');
    
        // Trophies Seed 6
        console.log('Starting Trophies seeding...');
        await seedTrophies();
        console.log('Trophies seeding completed.');

        // User Territories Seed 
        console.log('Starting User Territories seeding...');
        await seedUserTerritories ();
        console.log('User Territories seeding completed.');
    
        /// Seed User Progress
        console.log('Starting user_progress seeding...');
        await seedUserProgress();
        console.log('user_progress seeding completed.');

        // Seed User Achievements
        console.log('Starting User Achievement seeding...');
        await seedUserAchievement ();
        console.log('User Achievement seeding completed.');
    
        /*
        // Seed User Profile  
        console.log('Starting User Profile seeding...');
        await seedUserProfiles ();
        console.log('User Profile seeding completed.');
        */

        console.log('Seeding complete.');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

seedAll();