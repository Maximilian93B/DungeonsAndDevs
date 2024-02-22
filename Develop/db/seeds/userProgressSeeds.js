// Import UserProgress Model
const { UserProgress } = require('../../Models/userProgress');
const sequelize = require('../../config/connection');

const seedUserProgress = async() => {
    await sequelize.sync({force: false });

    const userProgressData = [
            { user_id: 1, 
                challenge_id: 1, 
                status: 'Completed', 
                last_accessed: new Date('2023-08-01T10:00:00Z') 
            },
            // Add more records as needed
        ];

        try {
            await UserProgress.bulkCreate(userProgressData)
            console.log('User Progress seeded successfully');
        } catch (error) {
            console.error('Error seeding User Progress', error);
        }
};


 module.exports = seedUserProgress;
