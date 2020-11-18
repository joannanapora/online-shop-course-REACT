import './App.css';

import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.component.jsx';
import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component.jsx';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/sign-in' component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}



export default App;