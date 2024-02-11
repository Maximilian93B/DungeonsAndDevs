// Writting this route in order to test the db 
const express = require('express')
const { User } = require('../../Models/User')
const router = express.Router()

// Get route to fetch all users 

router.get('/users', async ( req, res)=> {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Erro fetching users:', error);
        res.status(500).json({ success: false, message: 'server error'}); 
    }
})

module.exports = router; 