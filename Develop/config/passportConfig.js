// This file will handle the Passport Configuration 
// This file works in conjunction with our authRoutes for user authentication
// We will use .toLowerCase avoiding databes querys problems with case sensitivity for usernames
// We will serialize and Deserialize user info in sessions 


// Import Modules 
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../Models/User');

// Init passport auth
function initialize(passport) {
    // Define our authentication 
    const authenticateUser = async (username, password, done) => {
        // Normalize the username to lowercase for database storage 
        const normalizedUsername = username.toLowerCase();
        console.log('Attempting to authenticate the user: ${ ')
        try {
            // Attempting to find the user in the database (normalizedUsername)
            const user = await User.findOne({ where: { username: normalizedUsername } });
            console.log( user ? 'User found: ${user.username}' : 'User not found');
            // If user is not found, return an error message
            if (!user) {
                return done(null, false, { message: 'Username not found' });
            }

            // If user is found, compare hashed password
            const match = await bcrypt.compare(password, user.password);
            console.log(match ? 'Password matches': 'Incorrect Password');
            if (match) {
                // If passwords match, authent is successful
                return done(null, user);
            } else {
                // If false , return error 
                return done(null, false, { message: 'Incorrect Password' });
            }
        } catch (e) {
            // Handle any errors that occur during the process
            console.error('Error during authent for user: ${normalizedUsername}',e);
            return done(e);
        }
    };

    // Tell passport to use our 'Locally' defined strat, with the custom username
    passport.use(new LocalStrategy({ usernameField: 'username'}, authenticateUser));
    
    // Serialize the user info into the session if successful auth
    passport.serializeUser((user, done)=> {
        console.log('Serializing user: ${user.user_id}');
        done(null, user.user_id);
    });
    
    // Deserialize the user info from the session in order to identify sub requests  
    passport.deserializeUser((id,done)=> {
        console.log('Deserializing user: ${id}'); 
        User.findByPk(id)
        .then(user => {
            done(null,user);
        })
        .catch(e => {
            console.error('Error during deserialization for user ID: ${id}',e);
        });

        });       

}

module.exports = initialize;