import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.component.scss'

// functional component because we dont need our component to hold any state
// we want to dynamicly change our title as a props (destructre the title)
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }} ></div>

        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle>">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);