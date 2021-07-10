import React, {useRef, useEffect} from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';


const CartDropdown = ({ cartItems, history, dispatch }) => {


    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            dispatch(toggleCartHidden());
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
    <div ref={ref} className="cart-dropdown">
        <div className="cart-items">

            {
                cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />)))
                    :
                    <span className='empty-message'>Your cart is empty</span>
            }

        </div>
        <CustomButton
            onClick={() => {
                history.push('./checkout');
                dispatch(toggleCartHidden());
            }} > GO TO CHECKOUT </CustomButton>
    </div >
)};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));