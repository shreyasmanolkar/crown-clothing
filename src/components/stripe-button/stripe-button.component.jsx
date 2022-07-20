import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LNUeWSJvYqYzL5OI4DmFGi0s4P4gfDQRpB90UQTRS58M1ZygOJXa7eKholEzstqXrVs1lfKimbXfSthrdRulJA900Ck7whfKU';

    const onToken = token => {
        console.log(token);
        alert('Payement Succesful');
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Colthing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz"
            description={`Your total is 4 $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;