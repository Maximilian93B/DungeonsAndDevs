// Import Modules 

const { Territory } = require('../../Models/territory');
const sequelize = require('../../config/connection');


const seedTerritories = async () => {
    try{ 
        await sequelize.sync({force: true }); // CHANGE TO FALSE WHEN DEPLOYING 
        // call territoryData to seed tables
        await Territory.bulkCreate(territoryData);
        console.log('Territories Seeded');
    }   catch (error) {
        console.error('Territories Failed:', error);
    }
};


seedTerritories().then(() => {
    process.exit(0)// exit process when done 
});



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
]

