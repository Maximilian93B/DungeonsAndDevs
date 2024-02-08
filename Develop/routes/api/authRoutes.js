 
// Import all Modules/Models needed for login auth 
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../../Models/User');

// POST login - Handle the user login 
router.post('/login', async (req, res) => {
    const { username, password } = req.body; // Assuming the request sends these in lowercase

    try {
        // Use the User Model to find one by username
        const user = await User.findOne({ where: { Username: username } });
        if (!user) {
            return res.status(401).send('Invalid User or Password');
        }

        // Use bcrypt to check the password 
        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(401).send('Invalid User or Password'); // Same message for both errors for security
        }

        req.session.userID = user.UserID; // session management 
        
        res.send('Login Successful');
    } catch (error) {
        console.error('Something is wrong', error);
        res.status(500).send('Server error during login.');
    }
});

module.exports = router;
