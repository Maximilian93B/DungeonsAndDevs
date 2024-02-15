// Used to Seed User Data 
// MAKE SURE TO STORE HASHED PASSWORD OR MAKE SEED DATA HASH THE PASSWORD FIRST !!! 
const { User } = require('../../Models/User');

async function seedUsers(){

    try {
        await User.create({
            username: 'Joe Daily',
            email:'joedaily@example.com',
            password: 'password123',
            points: 100,sign_up_date: new Date(),
            last_login: new Date(),
            profile: 'Profile description for John Doe.'
        });


        console.log('Users seeded successfully');
    } catch (error) {
      console.error('Error seeding users:', error);
    }
  }
    

seedUsers();
