// Import all Modules/Models needed for login auth --> Passing User Model to passport config 
const express = require('express');
const router = express.Router();
const passport = require('passport')
//console.log(User)// checking path  this path is correct
const path = require('path');




// disaply the login page 
router.get('/', (req, res) => {
    // Render or send the login page
    res.sendFile(path.join(__dirname, '..', 'public', 'loginPage.html'));
});


// Handle Login -- Pass to passportConfig
router.post ('/', (req, res, next) => {
  // pass authen to passport 
  passport.authenticate('local', (err, user, info) => {
    if(err) { // Handle error during login 
      return next(err); // pass error to middlware 
    }
    if(!user) {
      return res.status(401).json({success: false, message: 'Invalid user or password'});
    }
    req.login(user, (err)=> {
      if (err) { 
        return next(err); // pass error to middleware again 
      }

      return res.json({ success : true, message: 'Login Successful'});
    });
  })(req, res, next);
});
  
  


module.exports = router;
