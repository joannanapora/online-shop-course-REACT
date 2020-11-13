import React from 'react';

import './menu-item.component.scss'

// functional component because we dont need our component to hold any state
// we want to dynamicly change our title as a props (destructre the title)
const MenuItem = ({ title, imageUrl, size }) => ( // props: { title: 'hats' }
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} ></div>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle>">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;