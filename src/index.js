import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'


const app = (
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App/>
      </PersistGate>
    </Router>
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
