import React, { useState } from 'react';
import './checkout.styless.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Stripe from "../../components/stripe/stripe.component";
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { clearItemFromCart } from '../../redux/cart/cart.actions';


const CheckoutPage = ({ cartItems,clearItem, total }) => {

    const [amount, setAmount] = useState(total)
    console.log(cartItems)

const cleanBasket = () =>{
    setAmount("");
    cartItems.map((item)=>{
        console.log('weszlo i usunelo')
        console.log(cartItems)
        return clearItem(item)
    })

}

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span></span>
                </div>
                <div className='header-block'>
                    <span></span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                )
            }
            < div className='total'>
                <span>
                    TOTAL: £{amount}
                </span>
            </div>
            <Stripe cleanBasket={cleanBasket} total={amount}></Stripe>
        </div>)
        
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);