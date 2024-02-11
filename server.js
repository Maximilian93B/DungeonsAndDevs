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
// Initialize Passport
initializePassport(passport);

// Create Express app
const app = express();
const port = process.env.PORT || 3303;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'Develop', 'public')));
app.use(session({
    secret: 'session_secret',
    resave: false,
    saveUninitialized: false,
}));

//Server Traffic logger --> tools/middlewareLogger
app.use(mwLogger);


// Flash 
app.use(flash());

// Passport 
app.use(passport.initialize()); // Initialize Passport middleware
app.use(passport.session()); // Enable session support for Passport

// Import routes 
app.use('./', routes)

/*
// Use other routes
app.use('/login', authRoutes);
app.use('/dashboard',dashboardRoutes);
app.use('/users', getUsers);
*/


// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'loginPage.html')); // Serve login page
});

app.get('/dashboard', (req ,res) => {
    res.sendFile(path.join(__dirname,'Develop', 'public', 'mainPage.html'));
})

// Handle login requests at the root route
app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard', // Redirect to dashboard on successful login
    failureRedirect: '/', // Redirect back to login page on failed login
    failureFlash: true, // Enable flash messages for feedback
}));


// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the Dungeons');
        app.listen(port, () => {
            console.log(`Enter " Our worlds name " http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
