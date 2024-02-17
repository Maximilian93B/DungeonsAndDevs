const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    if (req.isAuthenticated()) {
        // Assuming the server.js file is located outside of the Develop folder
        res.sendFile(path.join(__dirname, '../../public/mainPage.html'));
    } else {
        // User is not authenticated, redirect to the login page
        res.redirect('/login'); // Adjust according to your login route
    }
});

module.exports = router;
