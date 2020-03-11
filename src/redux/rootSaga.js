import {all, call} from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSaga';

export function* rootSaga() {
  yield all([
    call(fetchCollectionStart)
  ])
}