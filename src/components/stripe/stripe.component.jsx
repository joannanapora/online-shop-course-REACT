import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';

const Stripe = ({total, history, cleanBasket}) => {

    const publishableKey = 'pk_test_51JBdABAViV3uo2WMU97wQNS8v7ZoforP0KRvn88nWMzGPl2aZFoFU47oZgZs3apUslHtgYBe1VmKE3THcyRplkGr00s3ms48xk';
    const payStripe = total * 100;

   const  handleToken = () => {
       cleanBasket();
       history.push("/thankyou")
    }

    return (
        <StripeCheckout
        image="https://image.flaticon.com/icons/png/512/628/628324.png"
        name="PlantShop"
        label='Pay Now'
        amount={payStripe}
        currency="GBP"
        stripeKey={publishableKey}
        shippingAddress
        token={handleToken}>
        <CustomButton>Pay Now</CustomButton>
      </StripeCheckout>
    );
}


export default withRouter(Stripe);