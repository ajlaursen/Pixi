const db = require('../models');
const ObjectID = require('mongodb').ObjectID;
const stripe = require('stripe')(process.env.STRIPE_KEY);

const calculateOrderAmount = (items) => {
    console.log('items', items);

    // db.Image.findById(ObjectID(items)).then((res) => {
    //     console.log('image', items);
    //     console.log('price', res.price);
    // });

    items.forEach((image) => {
        // db.Image.findById(ObjectID(image._id)).then((res) => {
        db.Image.findById(ObjectID(image)).then((res) => {
            console.log('res', res);
            // console.log('price', res.price);
            // console.log('image_id', res._id);
        });
    });

    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
};

module.exports = {
    createIntent: async function (req, res) {
        console.log('req.body', req.body);
        // const { items } = req.body;
        const images = req.body.images;
        console.log('images', images);
        // console.log('items', items);
        console.log(calculateOrderAmount(images));
        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(images),
            currency: 'usd',
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    },
};
