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
        try {
            // Attempting to find the user in the database (normalizedUsername)
            const user = await User.findOne({ where: { username: normalizedUsername } });
            // If user is not found, return an error message
            if (!user) {
                return done(null, false, { message: 'Username not found' });
            }

            // If user is found, compare hashed password
            if (await bcrypt.compare(password, user.password)) {
                // If passwords match, authent is successful
                return done(null, user);
            } else {
                // If false , return error 
                return done(null, false, { message: 'Incorrect Password' });
            }
        } catch (e) {
            // Handle any errors that occur during the process
            return done(e);
        }
    };

    // Tell passport to use our 'Locally' defined strat, with the custom username
    passport.use(new LocalStrategy({ usernameField: 'username'}, authenticateUser));
    // Serialize the user info into the session if successful auth
    passport.serializeUser((user, done)=> done(null, user.user_id));
    // Deserialize the user info from the session in order to identify sub requests  
    passport.deserializeUser((id,done)=> {
        return done(null, User.findByPk(id));
    });

}

module.exports = initialize;