import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage';
import ShopPage from './page/shoppage/shopPage';
import Header from './components/Header/Header'
import SignInSignUp from './page/SignInSignUp/SignIn';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
        
      } else {
        this.setState({
          currentUser: user
        })
        
      }
      // createUserProfileDocument(user);
      // this.setState({currentUser: user})
      
    });
    
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
