import './App.css';

import React, { useEffect } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';
import Collection from './components/collections/collections.component';
import Contact from './pages/contact/contact.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action.js';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import Delivery from './components/delivery/delivery.component';
import AfterPaid from './pages/after-paid/after-paid.component';
import BackArrow from "./components/back-arrow/back-arrow.component";

const App = ({ setCurrentUser, currentUser }) => {

  
  useEffect(() => {
   
    let unsubscribeFromAuth;
    
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }

    })
    return () => {
      unsubscribeFromAuth();
  
    };
  }, [])


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/seeds' render={(props) => <Collection title="SEEDS" id={0} {...props} />}  />
        <Route path='/flowerpots' render={(props) => <Collection title="FLOWERPOTS" id={1}  {...props} />}  />
        <Route path='/tools' render={(props) => <Collection  title="TOOLS" id={2} {...props} />}  />
        <Route path='/furnitures' render={(props) => <Collection  title="FURNITURES" id={3}  {...props} />}  />
        <Route path='/lights' render={(props) => <Collection title="LIGHTS" id={4} {...props} />}  />
        <Route exact path='/delivery' component={Delivery}  />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/thankyou' component={AfterPaid} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/sign-in' render={() => currentUser ? (<Redirect to='/' />)
          :
          (<SignInSignUp />)}
        />
      </Switch>
      <div className='icons-author' >All images: flaticon.com</div>
    </div >
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,
  mapDispatchToProps)(App);