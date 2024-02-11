// THis file will handle the Passport Configuration 

const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { User } = require('../Models/User');


function initialize(passport) {
    const authenticateUser = async ( username, password, done) => {
        //Find user by username 
        const user = await User.findOne({ where: { username: username } });
        if(user == null ) {
            return done(null, false, {message: 'Username not found '})
        }

        try {
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done (null, false, { message: ' Incorrect Password'});
            }
        } catch (e) {
            return done(e);
        }
    };


    passport.use(new LocalStrategy({ usernameField: 'username'}, authenticateUser));
    passport.serializeUser((user, done)=> done(null, user.user_id));
    passport.deserializeUser((id,done)=> {
        return done(null, User.findByPk(id));
    });

}

module.exports = initialize;