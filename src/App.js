import React from 'react';
import './App.css';
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
import {checkUserSession} from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {

  authSubscription = null;

  componentDidMount() {

    const {checkUserSession} = this.props;
    checkUserSession();

  }

  componentWillUnmount() {
    //executes firebse.unsubscribe()
    this.authSubscription();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div >
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
