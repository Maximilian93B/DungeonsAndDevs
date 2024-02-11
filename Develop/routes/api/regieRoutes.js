// This route handles user registration endpoint 

// Import Modules,Models{ User }

const express = require('express');
const bcrypt = require('bcryptjs');
const {User} = require('../../Models/User');
const router = express.Router();

// Post route 
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        // Insert the new user into the database
        await User.create({
            Username: username,
            Email: email,
            Password: hashedPassword,
            SignUpDate: new Date(),
            LastLogin: new Date(), // Adjust according to your requirements
            // Leave Points and Profile default or adjust as needed
        });

        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Registration failed' });
    }
});

module.exports = router;
