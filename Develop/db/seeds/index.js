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




// Async seed function to call all seed functions 


const seedAll = async () => {
    await sequelize.sync({force: false}); // cahnge for production 
    try {
       
        console.log('Starting user seeding...');
        await seedUsers();
        console.log('User seeding completed.');
    
        console.log('Starting territory seeding...');
        await seedTerritories();
        console.log('Territory seeding completed.');
    
        console.log('Starting Challenges seeding...');
        await seedChallenges();
        console.log('Challenge seeding completed.');
    
        // Provinces Seed
        console.log('Starting province seeding...');
        await seedProvinces();
        console.log('Province seeding completed.');
    
        // Trophies Seed 
        console.log('Starting Trophies seeding...');
        await seedTrophies();
        console.log('Trophies seeding completed.');
    
        // Dependant Tables 
        console.log('Starting User Achievement seeding...');
        await seedUserAchievement ();
        console.log('User Achievement seeding completed.');
    
        // User Territories Seed 
        console.log('Starting User Territories seeding...');
        await seedUserTerritories ();
        console.log('User Territories seeding completed.');
    
        /// User Progress Seed
        console.log('Starting user_progress seeding...');
        await seedUserProgress();
        console.log('user_progress seeding completed.');
        
        // User Profile Seed 
        console.log('Starting User Profile seeding...');
        await seedUserProfiles ();
        console.log('User Profile seeding completed.');
    
        process.exit(0);

    } catch (error){
        console.error('Seeding failed:', error);
        process.exit(1)
    }

};
 

seedAll();