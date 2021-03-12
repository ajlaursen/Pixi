const db = require('../models');
const ObjectID = require('mongodb').ObjectID;
const stripe = require('stripe')(process.env.STRIPE_KEY);

const calculateOrderAmount = async (items) => {
    const resultObj = {
        images: [],
        price: 0,
    };

    await Promise.all(
        items.map(async (image) => {
            const result = await db.Image.findById(ObjectID(image));
            resultObj.images.push(result._id);
            resultObj.price = resultObj.price + result.price;
        })
    );

    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return resultObj.price;
};

module.exports = {
    createIntent: async function (req, res) {
        const images = req.body.images;
        const amount = await calculateOrderAmount(images);
        if (!amount || amount < 50) {
            res.status(200).json({
                message:
                    'Order must be at least $0.50, so we should figure out what to do for "free" images, if that\'s an option',
            });
        } else {
            // Create a PaymentIntent with the order amount and currency
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount,
                currency: 'usd',
            });
            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        }
    },
};
