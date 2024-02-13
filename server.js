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

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Develop/public'));
app.use(session({
    secret: 'session_secret',
    resave: false,
    saveUninitialized: false,
}));

//Server Traffic logger --> tools/middlewareLogger
app.use(mwLogger);

// Flash --> for flash messages 
app.use(flash());

// Passport 
app.use(passport.initialize()); // Initialize Passport middleware
app.use(passport.session()); // Enable session support for Passport

app.post('/auth', passport.authenticate('local', {
    successRedirect: '/dashboard', // Redirect to dashboard on successful login
    failureRedirect: '/', // Redirect back to login page on failed login
    failureFlash: true, // Enable flash messages for feedback
}));

// Import routes 
app.use('/', routes);




//MIDDLE WARE ENDS 

/*
app.use('/register', regieRoutes);// POST 
app.use('/auth',authRoutes)// POST 
app.use('/dashboard', dashboardRoutes)// GET 
*/

/*
// Use other routes
app.use('/login', authRoutes);
app.use('/dashboard',dashboardRoutes);6
app.use('/users', getUsers);
*/

// Routes

//GET Routes 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'loginPage.html')); // Serve login page
});

// Serve dahsboard page when endpoint is reached 

app.get('/dashboard', (req ,res) => {
res.sendFile(path.join(__dirname, '..', 'public', 'mainPage.html'));
})

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
