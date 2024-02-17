// Import all Modules/Models needed for login auth --> Passing User Model to passport config 
const express = require('express');
const router = express.Router();
const passport = require('passport')
//console.log(User)// checking path  this path is correct


router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      // Handle error during login
      return res.status(500).json({ success: false, message: 'Authentication failed', error: err.toString() });
    }
    if (!user) {
      // Handle case where user is not found or password does not match
      return res.status(401).json({ success: false, message: info.message });
    }
    req.login(user, (loginErr) => { // Correct placement of parentheses and callback
      if (loginErr) {
        // Handle error establishing session
        return res.status(500).json({ success: false, message: 'Session could not be established', error: loginErr.toString() });
      }
      // Successful authentication
      return res.json({ success: true, message: 'Login successful', user: { id: user.id, username: user.username } });
    });
  })(req, res, next);
});





module.exports = router;
