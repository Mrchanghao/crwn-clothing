import React, {PureComponent} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';

import HomePage from './page/homepage/homepage';
import ShopPage from './page/shoppage/shopPage';
import CheckoutPage from './page/checkoutPage/CheckoutPage';

import Header from './components/Header/Header'
import SignInSignUp from './page/SignInSignUp/SignIn';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/userAction';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selector';
import {connect} from 'react-redux';

class App extends PureComponent {

  subscribeFromAuth = null;

  componentDidMount() {
    
    this.subscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
        
      } 
      this.props.setCurrentUser(user)
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => (
      //   {title, items}
      //   ))
      // );
    });
    
  };

  componentWillUnmount() {
    this.subscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' exact component={CheckoutPage} />
          {/* <Route path='/signin' component={SignInSignUp} /> */}
          <Route path='/signin' render={() => this.props.currentUser ? 
            <Redirect to='/' /> : <SignInSignUp /> } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, {setCurrentUser})(App);