const { User } = require('../../Models/User');
const bcrypt = require('bcryptjs');
const sequelize = require('../../config/connection');

const seedUsers = async() => {
    await sequelize.sync({force: false });

    const userData = [
        {
        username: 'JoeDaily',
            email: 'joedaily@example.com',
            password: await bcrypt.hash('password123', 10), // Hash the password
            points: 100,
            sign_up_date: new Date(),
            last_login: new Date(),
            profile: 'Profile description for Joe Daily.'
        }
    ];

    try {
        await User.bulkCreate(userData);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users', error);
    }
};


module.exports = seedUsers;



