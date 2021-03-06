import React from 'react';
import './CollectionsOverview.scss';
import PreviewCollection from '../PreviewCollection/PreviewCollection';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCollectionPreview} from '../../redux/shop/shopSelector'


const CollectionsOverview = ({collections}) => {
  
  return (
    <div className='collections-overview'>
      {
        collections.map(({id, ...otherProps}) => (
          <PreviewCollection key={id} {...otherProps} />
        ))  
      }     
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview
})

export default connect(mapStateToProps)(CollectionsOverview)