const { User } = require('../../Models/User');
const bcrypt = require('bcryptjs');

async function seedUsers() {
    try {
        const hashedPassword = await bcrypt.hash('password123', 10); // Hash the password with a salt round of 10

        // Assuming you want to insert a single user record; if you need to insert multiple, create an array of user objects
        await User.bulkCreate([
            {
                username: 'JoeDaily',
                email: 'joedaily@example.com',
                password: hashedPassword, // Use the hashed password
                points: 100,
                sign_up_date: new Date(),
                last_login: new Date(),
                profile: 'Profile description for Joe Daily.'
            }
            // Add more user objects here if needed
        ]);

        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
}

seedUsers();


