import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';

const ShopPage = ({match, location, history}) => {

    return (
      <div className='shop-page'>
        <Route component={CollectionsOverview} 
          exact path={`${match.path}`} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  
}


export default (ShopPage)