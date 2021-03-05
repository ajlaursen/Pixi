const router = require('express').Router();
const STRIPE = require('../../controllers/stripeController');
const checkAuth = require('../../utils/auth');

router.post('/create-payment-intent', checkAuth, STRIPE.createIntent);
// this is looking for something like this:
// {
// "images": ["60399bf1301daa0c88d31ba4", "60399bf5301daa0c88d31ba6"]
// }

module.exports = router;
