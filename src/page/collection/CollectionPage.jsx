import React from 'react';
import {connect} from 'react-redux'
import { selectCollection } from '../../redux/shop/shopSelector'
import './CollectionPage.scss';
import CollectionItem from '../../components/CollectionItem/CollectionItem'

const CollectionPage = ({collection}) => {
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>collection Page</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);