import React from 'react'
import { FaLocationArrow } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import './ContactInfoItem.css'

const ContactInfoItem = () => {
  return (
    <div className='ContactInfoItem ' >
      <div className='content-title'>
        <h4>CONTACT INFORMATION</h4>
        <p className='line'></p>
      </div>
      <div className='contactinfo'>
        <div className='contactinfo1'>
          <FaLocationArrow />
          <div className='info-text'>
            <h3>Address:</h3>
            <p>pune, Akurdi</p>
          </div>
        </div>
      </div>
      <div className='contactinfo'>
        <div className='contactinfo2'>
          <SlScreenSmartphone />
          <div className='info-text'>
            <h3>phone:</h3> 
            <p>+91 1234567890</p>
          </div>
        </div>
      </div>
    <div className='contactinfo'>
      <div className='contactinfo3'>
        <TfiEmail />
        <div className='info-text'>
        <h3>email:</h3>
        <p>petCare@gmail.com</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfoItem
