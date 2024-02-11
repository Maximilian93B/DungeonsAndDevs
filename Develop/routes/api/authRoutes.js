// Import all Modules/Models needed for login auth 
const express = require('express');
const router = express.Router();
const passport = require('passport')
const { User } = require('../../Models/User'); 
//console.log(User)// checking path  this path is correct
const path = require('path');




// disaply the login page 
router.get('/', (req, res) => {
    // Render or send the login page
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'loginPage.html'));; // Adjust path as necessary
});


// Handle Login -- Pass to passportConfig
router.post ('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err) { // Handle error during login 
      return next(err); // pass error to middlware 
    }
    if(!User) {
      return res.status(401).json({sucess: false, message: 'Innvlaid user or password'});
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
