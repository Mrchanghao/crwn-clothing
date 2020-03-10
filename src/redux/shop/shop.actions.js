import ShopActionType from './shop.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
  type: ShopActionType.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
}) 

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionType.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(
      snapshot => {
        const collectionMap = convertCollectionsSnapShotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
        
      }
    ).catch(err => dispatch(fetchCollectionsFailure(err.message)))
  }
} 
