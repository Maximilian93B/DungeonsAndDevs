// This route handles user registration endpoint 

// Import Modules,Models{ User }

const express = require('express');
const bcrypt = require('bcryptjs');
const { User, UserProfile } = require('../../Models/models');
const sequelize = require('../../config/connection');
const router = express.Router();


// Post route 
router.post('/', async (req, res) => {
    // sequelize transaction to ensure that if the user/userProfile cannot be registered then neither will go through to avoid database corruption. 
    const t = await sequelize.transaction();
    
    try {
        // Extract username , email , password from request body 
        const { username, email , password } = req.body 

        // Check to see if User already exisits by checking email 
        const existingUser = await User.findOne({ where: { email: email } });
            if (existingUser) {
                await t.rollback();
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
            await t.rollback();
            return res.status(400).json({ success: false, message: 'Invalid email format' });
        }

        // validate Password with bcrpyt 
        const hashedPassword = await bcrypt.hash(password,10)
        // Insert the new user into the database
        const newUser = await User.create({
            username: username,
            email: email,
            password: hashedPassword,
            sign_up_date: new Date(),
            last_login: new Date(),     
        }, {transaction: t });
        
        console.log(newUser.id); // This should not be null or undefined, this should print the user_id which is auto increment


        // Add to user_profile table 

        await UserProfile.create({
            user_id: newUser.user_id,
            username: newUser.username,
        }, { transaction: t });

        await t.commit();

        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        await t.rollback();
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Registration failed' });
    }
});

module.exports = router;
