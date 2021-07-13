import React, { useState, useEffect } from 'react';
import './collection-item.component.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    const [addedInfo,showAddedInfo ] = useState(false);


    const handleClick = (item) => {
        addItem(item);
        showAddedInfo(true);
    }

    useEffect(()=>{
        return(()=>{
            showAddedInfo(false);
        })
    },[])

    return (
        <>
        <div className="collection-item">
            {
                
           addedInfo ? 
          <div className='added-info'>Item added to basket!</div>
           : null}
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">£{price}</span>
            </div>
            <CustomButton onClick={() => handleClick(item)} inverted > ADD TO BASKET 
            
            </CustomButton>

           </div>
        </>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);