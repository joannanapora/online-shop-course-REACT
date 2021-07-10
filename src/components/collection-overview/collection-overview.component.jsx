import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PrevievCollection from '../../components/preview-collection/preview-collection.component';
import { selectCollections } from '../../redux/shop/shop.selector';
import BackArrow from "../back-arrow/back-arrow.component";

const CollectionOverview = ({ collections }) => (
    <div>
        <BackArrow/>
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