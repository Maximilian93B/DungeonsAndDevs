// Import alll modules 
const sequelize = require('./Develop/config/connection');
const session = require('express-session'); 
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require('path');
const express = require('express')
const authRoutes = require('./Develop/routes/api/authRoutes');
const dashboardRoutes = require('./Develop/routes/api/dashboardRoute')
const getUsers = require('./Develop/routes/api/getUsers');


const app = express();
const port = process.env.PORT || 3303;



// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true})); // to parsing our apps data 
app.use(express.static(path.join(__dirname, 'Develop', 'public'))); // Serves all static files in the 'Public Folder'


// Erro handling for middle ware 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
// Sessions management 
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


// Routes
app.get('/', (req, res) => {
    console.log('login page accessed')
    res.sendFile(path.join(__dirname, 'Develop', 'public', 'loginPage.html'));
});

app.use('/', getUsers)
    console.log('getUsers accessed')



// Authentication Routes
app.use('/api/auth', authRoutes);


// Dashboard after successful auth 
app.use(dashboardRoutes);

// TEST ROUTE FOR USER LOGIN --> When we test we will see 
/*
app.post('/api/auth/login', (req, res) => {
    console.log("Login request received", req.body);
    res.json({ success: true, message: "SHEEEESSSH we did it !! ." });
});
*/

// At the top of your server.js file


// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connected to the Dungeons');
        // Start the server here to ensure it only runs with a successful DB connection
        app.listen(port, () => {
            console.log(`A Dragon Has AWAKENED on ${port}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
