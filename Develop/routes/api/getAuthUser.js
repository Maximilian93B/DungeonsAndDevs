
// Import Modules
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    try {
        if (req.isAuthenticated()) {
            // User is authenticated, send user ID
            res.json({ userId: req.user.id });
        } else {
            // User is not authenticated, deny access
            res.status(403).json({ message: 'User not authenticated' });
        }
    } catch (error) {
        console.error('Error retrieving user ID:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router; 
