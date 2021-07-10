import React from 'react';
import "./contact.style.scss"
import BackArrow from "../../components/back-arrow/back-arrow.component";

const Contact = () => (
    <>
    <BackArrow/>
    <div className="contact">
        <img className='phone' alt='' src='https://image.flaticon.com/icons/png/512/1034/1034255.png'></img>
        <div className='contact-contain' >
        <p> Joanna Napora  </p>
        <p> joanna.napora@yahoo.com</p>
           <p> +44 7564 247045 </p>
            <p>Manchester, UK</p>
            </div>
    </div>
    </>
)
export default Contact;