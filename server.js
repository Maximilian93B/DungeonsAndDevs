const express = require ("express")
const app = express()
const sequelize = require('./Develop/config/connection')
const session = require('express-session'); 
const authRoutes = require('./Develop/routes/api/authRoutes')
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const port = process.env.PORT || 3303

app.use(express.json());


app.use(session({
    // Need to configure Session 
    secret: 'Secretest-key-ever',
    store: new SequelizeStore({
        db: sequelize, 
        // Need to look into passing instances for sessions 
    }),
    resave: false, // Do not save session if unmodified 
    saveUninitialized: false, // Only create session when something is stored
    cookie: {
        secure: false , // IF we are using HTTPS we can change to true, 
        maxAge: 1000 * 60 * 60 * 24, // Will expire after 24 hours 
    }
}));

app.use('/api/auth', authRoutes);


app.get("/", (req, res)=> {
    if (req.session.views) {
        req.session.views++;
        res.write('<p>Views: ${req.session.views}</p>`')
        res.write(`<p>Expires in: ${req.session.cookie.maxAge / 1000} seconds</p>`)
        res.end();
    } else { 
        res.end('Welcome to session demo. Refresh!!');
    }
    res.send("Welcome to Dungeons and Devs")
})

app.listen(port, ()=> {
    console.log("A Dragon Has AWAKENED on ${port}")
});


