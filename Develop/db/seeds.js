// Seed data with hashed password 

const bcrypt = require('bcryptjs');
const {User} = require('../Models/User');

const seedUsers = async () => {
    try {
        // Password to be hashed and stored in the database
        const plaintextPassword = 'password123';

        // Hash the password
        const hashedPassword = bcrypt.hashSync(plaintextPassword, 10); // Using a saltRounds value of 10

        // Create a new user object with hashed password
        const newUser = {
            username: 'testuser',
            email: 'testuser@example.com',
            password: hashedPassword, // Store the hashed password in the database
            // Add other user properties here
        };

        // Insert the new user into the database
        await User.create(newUser);

        console.log('User seeded successfully');
    } catch (error) {
        console.error('Error seeding user:', error);
    }
};

// Call the seed function
seedUsers();