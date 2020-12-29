
import React from 'react';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import MenuItem from '../menu-item/menu-item.component';
import { createStructuredSelector } from 'reselect';

import './directory.component.scss'
// this needs to be class component because we have to store the state value of those menu items we wanna pass 

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem
                key={id}
                {...otherSectionProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);