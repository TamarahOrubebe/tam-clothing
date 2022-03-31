import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const onToken = (token) => {
    console.log(token);
    alert('Payment succesful');
}

const StripeCheckoutButton = ({ price }) => {
    
    const stripePrice = price * 1000;
    const publishableKey = "pk_test_CXkmJ4cc7Ap4BZJDGLDH8R3A00fs1ubI6N"


    return (
        
        <StripeCheckout
            label="Pay Now"
            name="Tams Clothing Ltd,"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            token={onToken}
            amount={stripePrice}
            panelLabel="Pay Now"
            stripeKey={publishableKey}
                
        />
    
    )

};
export default StripeCheckoutButton;
