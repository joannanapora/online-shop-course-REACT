import React from 'react';
import "./back-arrow.styles.scss"
import { withRouter } from 'react-router';
const BackArrow = ({history}) => {
return (
    <div className="back-arrow">
        <img className='arrow' alt='arrow' onClick={()=>history.goBack()} src='https://image.flaticon.com/icons/png/512/892/892646.png' ></img>
    </div>
)

}

export default withRouter(BackArrow);