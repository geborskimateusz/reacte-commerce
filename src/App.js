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
import { auth, createUserProfileDoc } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';
import { selectShopCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {

  authSubscription = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.authSubscription = auth.onAuthStateChanged(async userAuth => {
      let userExist = !!userAuth;
      if (userExist) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snap => {
          setCurrentUser({
            id: snap.id,
            ...snap.data()
          })
        })

      } else {
        setCurrentUser(userAuth)
      }
    })

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
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
