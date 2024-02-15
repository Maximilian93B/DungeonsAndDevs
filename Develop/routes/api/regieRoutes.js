// This route handles user registration endpoint 

// Import Modules,Models{ User }

const express = require('express');
const bcrypt = require('bcryptjs');
const {User} = require('../../Models/User');
const router = express.Router();


// Post route 
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        // Extract username , email , password from request body 
        const { username, email , password } = req.body 

        // Check to see if User already exisits by checking email 
        const existingUser = await User.findOne({ where: { email: email } });
            if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Validate input
        if(!username || !email || !password) {
            return res.status(400).json({ sucess: false, message: 'provide username, email and password'});
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
            username: username,
            email: email,
            password: hashedPassword,
            sign_up_date: new Date(),
            last_login: new Date(),     
        });

        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Registration failed' });
    }
});

module.exports = router;
