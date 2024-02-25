// Writting this route in order to test the db 
const express = require('express')
const { User } = require('../../Models/models');
const router = express.Router()

// Get route to fetch all users 

router.get('/', async ( req, res)=> {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'server error'}); 
    }
})


router.get('/:id', async (req,res) => {
    const userID = req.params.id; 

    try {
        const user = await User.findByPk(userID);
        if(user) {
            console.log('User Fetched:', user);
            res.json(user);
        } else {
            res.status(404).send('User not found');
        } 
    } catch (error){
        console.error('Failed to get User:', error);
        res.status(500).send('Server Error');
    }
});

module.exports = router; 