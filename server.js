const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const session = require('express-session');
const config = require('./config/database');
const { User } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Pixi Darkmode',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    // store:
};
app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

require('./config/passport')(User);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(config.database);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
