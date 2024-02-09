// Route for Dashboard page 
// to reach this endpoint the user must have successful login 

const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/dashboard', async (req ,res)=> {
    if (!req.session.UserID) {
        // add async Ops here --> What do we need it to do? 
        return res.status(401).redirect('/loginPage.html');
    } else {
        res.sendFile(path.join(__dirname, 'Develop', 'public', 'dashboard.html'));
    }
});

module.exports = router; 