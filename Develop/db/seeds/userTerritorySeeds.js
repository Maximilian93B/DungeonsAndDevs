const { UserTerritory } = require('../../Models/userTerritory');
const sequelize = require('../../config/connection');

async function seedUserTerritories() {
    try {
        await sequelize.sync({force: true})
        await UserTerritory.bulkCreate([
            {
                user_id: 1,
                territory_id: 1,
                is_unlocked: true
            }          
        ]);
        console.log('User territories seeeded successfully');
    } catch (error) {
        console.error('Error seeding user territories', error);
    }
}

seedUserTerritories();