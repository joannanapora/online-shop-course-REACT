import React from 'react';
import "./delivery.styles.scss"

const link = "https://github.com/joannanapora/plantshop"
const Delivery = () => (
    <>

    <div className="delivery">
        <img className='truck' alt='' src='https://image.flaticon.com/icons/png/512/3255/3255491.png'></img>
        <div className='delivery-contain' >
        <p>We work with three companies delivering flowers all over the UK. </p>
            <p>Please visit their websites for more information.</p>
            </div>
    </div>
    <div className="list">
        <div className='company-name' >
        <a rel="noreferrer" target = "_blank" href={link} ><p>MyFault.co.uk</p></a>
            </div>
    </div>
    <div className="list">
        <div className='company-name' >
        <a rel="noreferrer" target = "_blank" href={link} ><p>AlwaysAtYourDoor.co.uk</p></a>
            </div>
    </div>
    <div className="list">
        <div className='company-name' >
        <a rel="noreferrer" target = "_blank" href={link} ><p>TellSorryFaster.co.uk</p></a>
            </div>
    </div>
    <div className="code" >Discout code: "PLANTSHOP" </div>
    </>
)
export default Delivery;