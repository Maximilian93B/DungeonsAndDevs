// Import Trophy Model and Modules 
const { Trophy } = require('../../Models/trophy');
const sequelize = require('../../config/connection');

// Decalre async 
const seedTrophies = async () => {
    await sequelize.sync({force: false });
    // Seed Data 
    const trophyData = [

    {
        name: 'Navigators Compass',
        image_url: '/images/navigators-compass.jpg',
        description: 'Awarded for mastering the Open Waters.',
        territory_id: 1 
    },
    {
        name: 'Builders Hammer',
        image_url: '/images/builders-hammer.jpg',
        description: 'Awarded for constructing the most resilient structures.',
        territory_id: 2
    },
    {
        name: 'Scripters Scroll',
        image_url: '/images/scripters-scroll.jpg',
        description: 'Awarded for excellence in JavaScript.',
        territory_id: 3
    },
    {
        name: 'Express Pioneer Medal',
        image_url: '/images/express-pioneer-medal.jpg',
        description: 'Awarded for rapid development in Eerie Express.',
        territory_id: 4
    },
    {
        name: 'SQL Sage Badge',
        image_url: '/images/sql-sage-badge.jpg',
        description: 'Awarded for advanced query crafting at SQL Summit.',
        territory_id: 5
    },
    {
        name: 'Ultimate Quest Crown',
        image_url: '/images/ultimate-quest-crown.jpg',
        description: 'Awarded for completing the Final Quest.',
        territory_id: 6
    }

];
// await Table and Error Handle 
try {
    await Trophy.bulkCreate(trophyData);
    console.log('Trophies Seeded');
} catch (error) {
    console.error('Error Seeding Tropgies:', error);
}
};

// Export Function 
module.exports = seedTrophies;
