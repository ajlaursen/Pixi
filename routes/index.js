const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const userRoutes = require('./user');
const stripeRoutes = require('./stripe');

// API Routes
router.use('/api', apiRoutes);
// User Routes
router.use('/user', userRoutes);
// Stripe Routes
router.use('/stripe', stripeRoutes);

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
