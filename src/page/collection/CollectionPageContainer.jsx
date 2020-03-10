import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import withSpinner from '../../components/withSpinner/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoaded: (state) => !selectIsCollectionLoaded(state),
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionPageContainer;