
const { UserTrophies } = require('../../Models/userTrophies'); 
const sequelize = require('../../config/connection');

// Decalre async function 
const seedUserTrophies = async () => {
    await sequelize.sync({ force: false }); 
    // Seed Data 
    const userTrophyData = [
        {
            profile_id: 1, 
            trophy_id: 1,
            awarded_on: new Date()
        },
        
    ];
    // Try Catch to error handle and await User Trophies 
    try {
        await UserTrophies.bulkCreate(userTrophyData);
        // no console log just for the cleanliness in the terminal // console.log('User Trophies Seeded');
    } catch (error) {
        console.error('Error seeding User Trophies', error);
    }
};

module.exports = seedUserTrophies;


