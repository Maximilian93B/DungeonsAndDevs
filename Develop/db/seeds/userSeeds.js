// Import Models and Modules 
const { User } = require('../../Models/models');
const bcrypt = require('bcryptjs');
const sequelize = require('../../config/connection');

// Decalre async 
const seedUsers = async() => {
    await sequelize.sync({force: false });
    // User Seed data 
    const userData = [
        {
        username: 'JoeDaily',
            email: 'joedaily@example.com',
            password: await bcrypt.hash('password123', 10), // Hash the password to match Model and passport
            points: 100,
            sign_up_date: new Date(),
            last_login: new Date(),
            profile: 'Profile description for Joe Daily.'
        }
    ];
    // await table and Error handle 
    try {
        await User.bulkCreate(userData);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users', error);
    }
};

// Export function 
module.exports = seedUsers;



