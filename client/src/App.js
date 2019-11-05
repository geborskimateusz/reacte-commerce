import React, { useEffect } from 'react';
import {GlobalStyle} from './global.styles';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign/sign.component';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle/>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin'
          render={() => currentUser ? (<Redirect to='/' />) : (<SignPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div >
  );

}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
