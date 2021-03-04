const router = require('express').Router();
const STRIPE = require('../../controllers/stripeController');
const checkAuth = require('../../utils/auth');

router.post('/create-payment-intent', checkAuth, STRIPE.createIntent);

module.exports = router;
