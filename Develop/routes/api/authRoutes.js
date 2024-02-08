// Import all Modules/Models needed for login auth 
const express = require('express')
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../../Models/User');


//POST login - Handle the user login 

router.post('./login', async ( req, res) => {
    const { Username , Password } = req.body;

    try {
        // Use the User Model to fine one by username
        const user = await User.findOne({ where:{ Username: Username } });
        if (!user) {
            return res.status(401).send('Invalid User or Password');
        }

        // Use bcrypt to check the password 
        const foundUser = await bcrypt.compare(Passwordassword, User.Password);
            if(!foundUser) {
                return res.status(401).send('Invalid User or Password'); // using user not found for passwrod to avoid maliscious activity. ask me why if you want to know reasonning. 
            }

        req.session.userID = user.userID;
        
    
        res.send('Login Successful');

    } catch (error) {
        console.error('hmm something is wrong', error);
        res.status(500).send('Server errror during login.');
    }
});

module.exports = router;  