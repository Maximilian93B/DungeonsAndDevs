/*
const { UserProfile } = require('../../Models/userProfile');
const sequelize = require('../../config/connection');

const seedUserProfiles = async() => {
 await sequelize.sync({force: false });
    const userProfileData = [
            {
                user_id: 1,
                current_territory_id: 1,
                current_challenge_id: 1,
                username: 'Joe Daily'
            },
        ];
    
    try {
        await UserProfile.bulkCreate(userProfileData);
        console.log('User Profile Seeded')
    } catch (error) {
        console.error('Error seeding User Profiles', error);
    }
};

module.exports = seedUserProfiles;
*/