// Import Modules and Models 
const { UserProfile } = require('../../Models/models');
const sequelize = require('../../config/connection');

// Declare async 
const seedUserProfiles = async() => {
 await sequelize.sync({force: false });
 // Seed Data       
 const userProfileData = [
        {
            user_id: 1,
            current_territory_id: 1,
            current_challenge_id: 1,
            username: 'Joe Daily'
        },
    ];
    // await table and Error Handle  
    try {
        await UserProfile.bulkCreate(userProfileData);
        console.log('User Profile Seeded')
    } catch (error) {
        console.error('Error seeding User Profiles', error);
    }
};


// Export function 
module.exports = seedUserProfiles;
