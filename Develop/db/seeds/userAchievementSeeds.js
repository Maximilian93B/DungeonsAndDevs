const { Achievement } = require('../../Models/achievement');
const sequelize = require('../../config/connection');

async function seedUserAchievement() {
    try {
        await sequelize.sync({force: false});
        await Achievement.bulkCreate([
            {
                user_id:1,
                trophy_id:1,
                date_earned: new Date ('2023-01-15 14:30:00')
            }
        ]);
        console.log('Achievements seeded successfully');
    } catch (error) {
        console.error('Error seeding achievements', error);
        }

    }

    seedUserAchievement();