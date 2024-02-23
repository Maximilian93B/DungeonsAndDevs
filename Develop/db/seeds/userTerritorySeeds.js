
// Import Models and sequelize config
const { UserTerritory } = require('../../Models/models');
const sequelize = require('../../config/connection');

// Decalre asyn function 
const seedUserTerritories = async() => {
    await sequelize.sync({ force: false })
    // Seed data
    const userTerritoryData =[
            {
                user_id: 1,
                territory_id: 1,
                is_unlocked: true
            }          
    ];
    // await table then seed data 
    try {
        await UserTerritory.bulkCreate(userTerritoryData)
        console.log('User Territory seed successful');
    } catch (error) {
        console.error('Error seeding User Territories');
    }
};       

// export function
module.exports = seedUserTerritories;