// Import Model and Modules
const { Territory } = require('../../Models/models');
const sequelize = require('../../config/connection');

// Declare async 
const seedTerritories = async () => {
    // Seed Data 
    const territoryData = [
        {
            name: 'Open Waters',
            description: 'Commencement Challenge',
            icon: 'rowboat Icon',
        },
        {
            name: 'The Isles of Structure & Styling',
            description: 'Quest 1-HTML and CSS',
            icon: 'territory Icon',
        },
        {
            name: 'Handler Highlands',
            description: 'Quest 2-JavaScript',
            icon: 'territory Icon',
        },
        {
            name: 'Eerie Express',
            description: 'Quest 3-Express.js',
            icon: 'territory Icon',
        },
        {
            name: 'SQL Summit',
            description: 'Quest 4-SQL',
            icon: 'territory Icon',
        },
        {
            name: 'Final Quest',
            description: 'Quest 5-All Topics',
            icon: 'territory Icon',
        },
    ];
    // await Table and Error Handle 
    try {
        await sequelize.sync({ force: false }); // Consider setting to false to preserve data after initial seeding
        await Territory.bulkCreate(territoryData);
        console.log('Territories Seeded');
    } catch (error) {
        console.error('Failed to seed territories:', error);
    }
};

// Export Function 
module.exports = seedTerritories
