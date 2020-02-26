import React, {Component} from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';

import {firestore} from '../../firebase/firebase.utils'

class ShopPage extends Component {

  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    // console.log(collectionRef)

    collectionRef.onSnapshot(async snapshot => {
      console.log(snapshot)
    })

  }

  render() {
    const {match} = this.props;
    return (
      <div className='shop-page'>
        <Route component={CollectionsOverview} 
          exact path={`${match.path}`} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
// } = ({match, location, history}) => {

    // return (
    
    // )
  
}


export default (ShopPage)