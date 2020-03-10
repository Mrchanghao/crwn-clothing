import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux';
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector';
import withSpinner from '../withSpinner/withSpinner';

import CollectionOverView from './CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner,
)(CollectionOverView)

export default CollectionsOverviewContainer;