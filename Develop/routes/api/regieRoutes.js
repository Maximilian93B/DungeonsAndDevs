// This route handles user registration endpoint 

// Import Modules,Models{ User }

const express = require('express');
const bcrypt = require('bcryptjs');
const {User} = require('../../Models/User');
const router = express.Router();

// Post route 
router.post('/register', async (req, res) => {
    try {
        // Extract username , email , password from request body 
        const { username, email , password } = req.body 

        // Validate input
        if(!username || !email || !password) {
            return res.status(400).json({ sucess: false, message: 'Please provide username, email and password'});
        }

        // Email validation 
        // Used Regex email validation built into node.js
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // validate Password with bcrpyt 
        const hashedPassword = await bcrypt.hash(password,10)


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
