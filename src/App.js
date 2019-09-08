import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from './page/homepage/homepage';


function App() {
  return (
    <div>
      <Route path='/' exact component={HomePage} />
    </div>
  );
}

export default App;
