import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './page/homepage/homepage';
import ShopPage from './page/shoppage/shopPage';


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
