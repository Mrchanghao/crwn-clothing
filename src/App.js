import React, {PureComponent} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage';
import ShopPage from './page/shoppage/shopPage';
import Header from './components/Header/Header'
import SignInSignUp from './page/SignInSignUp/SignIn';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/userAction';
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
        
      } else {
        this.props.setCurrentUser(user)
        
      }
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
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

// export default connect(null, mapDispatchToProps)(App);
export default connect(null, {setCurrentUser})(App);