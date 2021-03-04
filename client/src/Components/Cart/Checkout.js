import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
 import "./Checkout.css";


export default function Checkout() {

    const promise = loadStripe("pk_test_51IQQ80D4OtRVa1E2KzXG3Ha8v5JgSlLktFG7pSVWIcvBL5L8iTUuRe14vzk2G1n4hl5Qf68FQrvAaptGjJ7BQCB400AwwnTJDw");
    return (

        // Make sure to call loadStripe outside of a component’s render to avoid
        // recreating the Stripe object on every render.
        // loadStripe is initialized with your real test publishable API key.
                <div className="pageCheckout">
                    <Elements stripe={promise}>
                        <CheckoutForm />
                    </Elements>
                </div>




            )
        }
