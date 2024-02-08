const express = require("express");
const app = express();
const sequelize = require('./Develop/config/connection');
const session = require('express-session'); 
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require('path');
const port = process.env.PORT || 3303;

app.use(express.json());
app.use(express.urlencoded({ extended: true})); // to parsing our apps data 

app.use(session({
    secret: 'Secretest-key-ever', // Consider using an environment variable for production
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // set to true if we want to use HTTPS 
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
    }
}));

// Serve static login.html file  from -->  'Develop/public/login.html'
app.use(express.static(path.join(__dirname, 'Develop', 'public')));

// Use the authRoute written in the api folder 
const authRoutes = require('./Develop/routes/api/authRoutes');
app.use('/api/auth', authRoutes);

// Route to serve the login page
app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, 'Develop', 'public', 'loginPage.html'));
    });
    
app.listen(port, () => {
    console.log(`A Dragon Has AWAKENED on ${port}`);
});



