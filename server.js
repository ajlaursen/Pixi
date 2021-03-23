const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
// const session = require('express-session');
const config = require('./config/database');
const { User } = require('./models');
// const stripe = require('stripe')('sk_test_51IQQ80D4OtRVa1E2X8sjxCMoHPFYXNGwLR0o5de92RqxijqZiVK6uYwQwVwycQ2B3SRsqbyKXJCZxgAdbIk4fRl200h1BadIT3');

const app = express();
const PORT = process.env.PORT || 3001;

import sslRedirect from 'heroku-ssl-redirect';

// const sess = {
//     secret: 'Pixi Darkmode',
//     cookie: {},
//     resave: false,
//     saveUninitialized: true,
//     // store:
// };
// app.use(session(sess));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(sslRedirect());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
// const calculateOrderAmount = items => {

//     // Replace this constant with a calculation of the order's amount
//     // Calculate the order total on the server to prevent
//     // people from directly manipulating the amount on the client
//     return 1400;
// };
// app.post('/create-payment-intent', async (req, res) => {
//     const { items } = req.body;
//     // Create a PaymentIntent with the order amount and currency
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: calculateOrderAmount(items),
//         currency: 'usd',
//     });
//     res.send({
//         clientSecret: paymentIntent.client_secret,
//     });
// });

require('./config/passport')(User);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(config.database);

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
