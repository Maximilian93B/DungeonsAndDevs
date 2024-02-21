const { Achievement } = require('../../Models/achievement');
const sequelize = require('../../config/connection');

const seedUserAchievement = async() => {
  await sequelize.sync({force: false });

  const userAchievementData = [
            {
                user_id:1,
                trophy_id:1,
                date_earned: new Date ('2023-01-15 14:30:00')
            }
        ];

        try {
            await Achievement.bulkCreate(userAchievementData)
            console.log('User Achievements Seeded')
        } catch (error) {
            console.error('Error Seeding User Achievements');
        }
    };

   module.exports = seedUserAchievement;