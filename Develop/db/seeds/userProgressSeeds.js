// Import UserProgress Model
const { UserProgress } = require('../../Models/userProgress');
const sequelize = require('../../config/connection');

async function seedUserProgress() {
    try {
        // Sync with database first, without forcing to avoid losing other data
        await sequelize.sync({ force: false }); 

        await UserProgress.bulkCreate([
            { user_id: 1, 
                challenge_id: 1, 
                status: 'Completed', 
                last_accessed: new Date('2023-08-01T10:00:00Z') 
            },
            // Add more records as needed
        ]);

        console.log('User progress seeded successfully');
    } catch (error) {
        console.error('Error seeding user progress:', error);
    }
}


seedUserProgress();
