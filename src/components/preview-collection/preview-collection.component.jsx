import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.component.scss';
import { withRouter } from 'react-router-dom';


const PreviewCollection = ({ title, items, history }) => (
    <div className="preview-collection">
        <h1 onClick={() => history.push(`/${title}`)} className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
);

export default withRouter(PreviewCollection);