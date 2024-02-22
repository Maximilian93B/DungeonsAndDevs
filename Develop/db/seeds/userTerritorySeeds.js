const { UserTerritory } = require('../../Models/userTerritory');
const sequelize = require('../../config/connection');

const seedUserTerritories = async() => {
    await sequelize.sync({ force: false })

    const userTerritoryData =[
            {
                user_id: 1,
                territory_id: 1,
                is_unlocked: true
            }          
    ];

    try {
        await UserTerritory.bulkCreate(userTerritoryData)
        console.log('User Territory seed successful');
    } catch (error) {
        console.error('Error seeding User Territories');
    }
};       


module.exports = seedUserTerritories;