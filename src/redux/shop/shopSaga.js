import { takeLatest, call, put } from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';
import {fetchCollectionSuccess, fetchCollectionsFailure} from './shop.actions';


export function* fetchCollectionAsync() {
  yield console.log('fired async');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapshot);

    yield put(fetchCollectionSuccess(collectionsMap));

  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}

