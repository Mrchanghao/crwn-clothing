import React from 'react'
import MenuItem from '../MenuItem/MenuItem';
import './Directory.scss'
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectDirectorySelections } from '../../redux/directory/directorySelector';

const Directory = ({sections}) => {
    
  
    return (
      <div className='directory__menu'>
        {
          sections.map(({title, imageUrl, id, size, linkUrl}) => (
            <MenuItem 
            linkUrl={linkUrl}
            title={title} imageUrl={imageUrl} key={id} size={size} />
          ))
        }
      </div>
    )
  }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
})

export default connect(mapStateToProps)(Directory)