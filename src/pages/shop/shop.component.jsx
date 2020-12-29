import React from 'react';
import { connect } from 'react-redux';
import { selectCollections } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect'

import PrevievCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PrevievCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>);


const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);