const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// API Routes
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
