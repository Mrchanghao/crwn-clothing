import React, { PureComponent } from 'react'
import SHOP_DATA from '../../data/collection'
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection'

export default class ShopPage extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA
    }

  }

  render() {
    const {collections} = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherProps}) => (
            <PreviewCollection key={id} {...otherProps} />
          ))
        }        
      </div>
    )
  }
}
