const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    // Check if the user is authenticated
    if (req.isAuthenticated()) {
        // User is authenticated, send the main page HTML file
        res.sendFile(path.join(__dirname, 'Develop', 'public', 'mainPage.html'));
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login');
    }
});

module.exports = router;
