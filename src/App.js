import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage';
import ShopPage from './page/shoppage/shopPage';
import Header from './components/Header/Header'
import SignInSignUp from './page/SignInSignUp/SignIn';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
