// This will control the execution of the seeding

const seedUsers = require('./userSeeds');
const seedTerritories = require('./territorySeeds');
const seedProvinces = require('./provinceSeeds');

const seedAll = async () => {
    try {
        console.log('Starting user seeding...');
        await seedUsers();
        console.log('User seeding completed.');

        console.log('Starting territory seeding...');
        await seedTerritories();
        console.log('Territory seeding completed.');

        console.log('Starting province seeding...');
        await seedProvinces();
        console.log('Province seeding completed.');

        // Add more seeding functions as necessary, with corresponding console.log messages

        console.log('All seeds planted successfully.');
    } catch (error) {
        console.error('Error during seeding:', error);
    }
};

seedAll();
