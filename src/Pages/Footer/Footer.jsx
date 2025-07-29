import React from 'react'
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import logo_img from '../../assets/logo_img.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <section className='Footer-section'>
            <div className='Footer-item1'>
              <img src={logo_img} alt='logo'/>
              <p>Welcome to PetCare — a trusted e-marketplace for premium petcare services. Whether it’s veterinary care, grooming, training, walking, sitting, or boarding, we connect you with skilled professionals who ensure your pets receive the best care, all from the comfort of your home. .</p>
            </div >

            <div className='Footer-item2'>

              <h4>QUICK LINKS</h4>

              <a href="/services/">Services</a>
              
              <a href="/ForPetParents/">For Pet Parents</a>    
             
              <a href="/Privacy/">Privacy Policy </a>
            </div>

            <div className='Footer-item3'>
              <h4>CONNECT</h4>
              <p><PiMapPinAreaBold />   pune</p>
              <p><HiOutlineDevicePhoneMobile />    +91 1234567890</p>
              <p><TfiEmail />    petCare@gmail.com</p>
              <div className='Footer-icons'>
              <a href='https://www.facebook.com/'><FaFacebook /></a>
              <a href='https://www.instagram.com/'><FaInstagramSquare /></a>
              <a href='https://www.youtube.com/'><FaYoutubeSquare /></a>
            </div>
          </div>     
        </section>
       
    </div>
  )
}

export default Footer
