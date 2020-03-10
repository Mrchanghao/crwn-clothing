import {createStore, applyMiddleware, compose} from 'redux';
// import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
))

const persistor = persistStore(store);

export {store, persistor};