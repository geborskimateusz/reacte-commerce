import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { checkUserSession } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import Spinner from './components/spinner/spinner.component';


const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignPage = lazy(() => import('./pages/sign/sign.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner/>}>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => currentUser ? (<Redirect to='/' />) : (<SignPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Suspense>
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
