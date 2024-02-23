// Import UserProgress Model
const { UserProgress } = require('../../Models/models');
const sequelize = require('../../config/connection');

// Decalre aysnc 
const seedUserProgress = async() => {
    await sequelize.sync({force: false });
    // Seed Data 
    const userProgressData = [
            { user_id: 1, 
                challenge_id: 1, 
                status: 'Completed', 
                last_accessed: new Date() 
            },
            
        ];
        // await Table and Error Handle 
        try {
            await UserProgress.bulkCreate(userProgressData)
            console.log('User Progress seeded successfully');
        } catch (error) {
            console.error('Error seeding User Progress', error);
        }
};

// Export function 
 module.exports = seedUserProgress;
