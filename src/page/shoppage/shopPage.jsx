import React, {Component} from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage';
import {connect} from 'react-redux';
import {firestore, convertCollectionsSnapShotToMap} from '../../firebase/firebase.utils'
import {updateCollections} from '../../redux/shop/shop.actions';

import withSpinner from '../../components/withSpinner/withSpinner';

const CollectionOverViewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

class ShopPage extends Component {

  state = {
    loading: true
  }


  unsubscribeFromSnapShot = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    // console.log(collectionRef)

    collectionRef.get().then(
      snapshot => {
        const collectionMap = convertCollectionsSnapShotToMap(snapshot);
        updateCollections(collectionMap);
        this.setState({loading: false})
      }
    )
  }

  render() {
    const {match} = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route render={(props) => <CollectionOverViewWithSpinner 
          isLoading={loading} {...props} />} 
          exact path={`${match.path}`} />
        <Route path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
      </div>
    )
  }  
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap => (
    dispatch(updateCollections(collectionsMap))
    )
})

export default connect(null, {updateCollections})(ShopPage)