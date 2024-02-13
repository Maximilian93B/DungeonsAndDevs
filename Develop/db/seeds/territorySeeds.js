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
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
{
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
{
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
{
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
{
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
{
    name: 'Territory Name ',
    description: 'Territory Description',
    icon: 'territory Icon',
},
// Add more if you need
]

