import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import "./collections.style.scss";

const Collection = ({ collections, title, id }) => {

    return(
        <>
        <h1>{title}</h1>
        <div className="collection-grid">
            {collections[id].items
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
    </div>
    </>
    )
                };

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(Collection);