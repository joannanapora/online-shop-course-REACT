import React, {useState, useRef, useEffect} from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/plant.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.component.scss';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => {

    const [isSticky, setSticky] = useState(false);

    const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

    return(
    <div ref={ref} className={isSticky ? "header-sticky" : "header"}>
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">PRODUCTS</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div>
                    :
                    <Link className='option' to='/sign-in'> SIGN IN </Link>
            }
            <CartIcon className="option" />
        </div>
        {
            hidden ? null : <CartDropdown  />}
    </div>
    )};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);

