import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GsSQVCmOYl36RpjailhOHSPtg8CxNXob7lB4tNHr2Az2yQINRooZed4C1OfnGFGQuHJiI7ZoG9YV8huENyVx5jN00YRjsheUR'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
         label='Pay Now'
         name='CRWN'
         billingAddress 
         shippingAddress 
         image='https://svgshare.com/i/CUz.svg' 
         description={`Your total is $${price}`} 
         amount={priceForStripe} 
         panelLabel='Pay Now' 
         token={onToken}
         stripeKey={publishableKey} />

        
    )
}

export default StripeCheckoutButton