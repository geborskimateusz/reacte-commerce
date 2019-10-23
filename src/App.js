import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignPage from './pages/sign/sign.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { auth, createUserProfileDoc } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  authSubscription = null;

  componentDidMount() {
    this.authSubscription = auth.onAuthStateChanged(async userAuth => {
      let userExist = !!userAuth;
      if (userExist) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          })
        })

      } else {
        this.setState({currentUser: userAuth})
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
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignPage} />
        </Switch>
      </div >
    );
  }
}

export default App;
