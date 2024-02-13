const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        console.log(path.join(__dirname))
        res.sendFile(path.join(__dirname,'../../public/mainPage.html'));
        
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/auth');
    }
});

module.exports = router;
