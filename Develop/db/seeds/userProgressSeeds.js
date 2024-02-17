// Import UserProgress Model {}
const { UserProgress } = require('../../Models/userProgress');


async function seedUserProgress() {
    try  {
        await UserProgress.bulkCreate([
            { user_id: 1, challenge_id: 1, status: 'Completed', last_accessed: new Date('2023-08-01 10:00:00') },
            { user_id: 2, challenge_id: 2, status: 'In Progress', last_accessed: new Date('2023-08-02 11:30:00') },
            { user_id: 3, challenge_id: 3, status: 'Not Started', last_accessed: new Date('2023-08-03 09:15:00') },
        ]);

        console.log('User progress seeded successfully');

    } catch (error) {
        console.error(' Error seeding user progress:', error);
    }
}

seedUserProgress();