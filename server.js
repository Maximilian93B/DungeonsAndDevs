// Import required modules
const express = require('express');
const session = require('express-session');
const path = require('path');
const passport = require('passport'); // Import Passport
const initializePassport = require('./Develop/config/passportConfig');
const routes = require('./Develop/routes/routes')
const sequelize = require('./Develop/config/connection');
const flash = require('connect-flash');
const mwLogger = require('./Develop/tools/middlewareLogger');



// Create Express app
const app = express();
const port = process.env.PORT || 3303;

// Initialize Passport
initializePassport(passport);

// Session config 
app.use(session({
    secret: 'session_secret',
    resave: false,
    saveUninitialized: false,
}));

// Passport Middleware
app.use(passport.initialize()); // Initialize Passport middleware
app.use(passport.session()); // Enable session support for Passport

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Develop', 'public')));
app.use(flash());
app.use(mwLogger);// middleware tool written to log requests


// Import routes 
app.use('/', routes);

//Serve login page as root  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/loginPage.html',)); // Serve login page
});

// Route error handling 
app.use((req, res, next) => {
    res.status(404).json({ message: "Not found" });
});


// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the Dungeons..Database: dnddevs_db ');
        app.listen(port, () => {
            console.log(`Enter " Our worlds name " http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
