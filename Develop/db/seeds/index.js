// This will control the execution of the seeding

const seedUsers = require('path_to_user_seeds');
const seedTerritories = require('./territorySeeds');
const seedProvinces = require('path_to_provinces_seed');
const seedCities = require('path_to_city_seed');

const seedAll = async () => {
    await seedUsers();
    await seedTerritories();
    await seedProvinces();
    await seedCities();
    // Add more 

    console.log('All seeds planted');
};

seedAll();