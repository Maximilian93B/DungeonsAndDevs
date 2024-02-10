// Import all Modules/Models needed for login auth 
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const { User } = require('../../Models/User'); 
console.log(User)// Ensure this path is correct

// POST login - Handle the user login 
router.post('/login', async (req, res) => {
    console.log('Inside login route, User:', User);
    const { username, password } = req.body;

    try {
        // Try to find the user by their username
        const user = await User.findOne({ where: { Username: username } });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid User or Password' });
        }

        // Use bcrypt to compare the submitted password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.Password); // Corrected
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid User or Password' });
        }

        // If the password matches, set the userID in the session for session management
        req.session.userID = user.UserID;
        
        // Respond with a success message
        res.json({ success: true, message: 'Login Successful' });
    } catch (error) {
        // Log and respond with any errors encountered during the process
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Server error during login.' });
    }
});

module.exports = router;
