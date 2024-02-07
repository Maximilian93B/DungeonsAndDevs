// Import all Modules/Models needed for login auth 

const express = require('express')
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../../Models/User');


//POST login - Handle the user login 

router.post('path_to_login_page', async ( req, res) => {
    const { username , password } = req.body;

    try {
        // Use the User Model to fine one by username
        const user = await User.findOne({ where:{ Username: username } });
        if (!user) {
            return res.status(401).send('User not found');
        }

        // Use bcrypt to check the password 
        const foundUser = await bcrypt.compare(password, user.Password);
            if(!foundUser) {
                return req.status(401).send('User not found');
            }

        req.session.userID = user.userID;
        
    
        res.send('Login Successful');

    } catch (error) {
        console.error('hmm something is wrong', error);
        res.status(500).send('Server errror during login.');
    }
});

module.exports = router;  