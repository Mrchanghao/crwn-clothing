import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware];


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middleware)
))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store);

export {store, persistor};