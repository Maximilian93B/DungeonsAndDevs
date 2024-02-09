 
// Import all Modules/Models needed for login auth 
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../../Models/User');

// POST login - Handle the user login 
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { Username: username } });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid User or Password' });
        }

        const isMatch = await bcrypt.compare(password, user.Password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid User or Password' });
        }

        req.session.userID = user.UserID; // Session management
        
        res.json({ success: true, message: 'Login Successful' });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error during login.' });
    }
});

// NEED TO SEND USERS TO /DASHBAORD WHEN SUCCESSFUL LOG IN 



module.exports = router;
