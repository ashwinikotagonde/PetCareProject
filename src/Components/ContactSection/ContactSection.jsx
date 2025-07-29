import React from 'react'
import './ContactSection.css'
import ContactInfoItem from '../ContactInfoItem/ContactInfoItem'
import ContectForm from '../ContectForm/ContectForm'

const ContactSection = () => {
  return (
    <div className='ContactSection'>
      <div className='ContactSection-wrapper'>
        <div className='ContactSection-left'>
          <ContactInfoItem/>
        </div>
        <div className='ContactSection-right'>
          <ContectForm/>  
        </div>
      </div>
    </div>
  )
}

export default ContactSection
