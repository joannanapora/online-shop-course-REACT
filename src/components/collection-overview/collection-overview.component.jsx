import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collection-overview.styles.scss';
import PrevievCollection from '../../components/preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <PrevievCollection key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);