import React, {Component} from 'react'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview'
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/CollectionPageContainer';
import {connect} from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shopSelector'

class ShopPage extends Component {


  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const {match} = this.props;
    
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} 
            component={CollectionsOverviewContainer}
            />
        <Route path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} />
      </div>
    )
  }  
}

const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  isCollectionLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, { fetchCollectionsStartAsync })(ShopPage)