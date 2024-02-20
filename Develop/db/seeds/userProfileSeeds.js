const { UserProfile } = require('../../Models/userProfile');
const sequelize = require('../../config/connection');

async function seedUserProfiles() {
    try {
        await sequelize.sync({force: false}); 
        await UserProfile.bulkCreate([
            {
                user_id: 1,
                current_territory_id: 1,
                current_challenge_id: 1,
                username: 'Joe Daily'
            },


        ]);
        console.log('User Profiles seeded successfully');
    } catch (error) {
        console.error('Error seeding user profiles', error);
    }
}

seedUserProfiles();