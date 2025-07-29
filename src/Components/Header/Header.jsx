import React from 'react';
import './Header.css';
import logo_img from '../../assets/logo_img.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='Header'>
      <img src={logo_img} alt="Company Logo" className='logo'/>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">AboutUs</Link></li>
        <li className='services'>
          <Link to="/services">Services</Link> 
          <div className='dropDown_header'>
            <Link to="/Grooming">GROOMING</Link>
            <Link to="/Training">TRAINING</Link>
            <Link to="/Boarding">BOARDING</Link>
            <Link to="/Sitting">SITTING</Link>
            <Link to="/Walking">WALKING</Link>
            <Link to="/Veterinarian">VETERINARIAN</Link>
            <Link to="/PetPathologyTests">PETPATHOLOGYTESTS</Link>
          </div>
        </li>
        <li className='howtobook'>
          <Link to="/how-to-book">HowToBook</Link>
            <div className='deropDown_header1'>
              <Link to="/ExpertRegistration">ExpertRegistration</Link>
              <Link to="/ForPetParents">ForPetParents</Link>
            </div>
        </li>
        <li><Link to="/Adoption">Adoption</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/connectus">ConnectUs</Link></li>
      </ul>
      <button className='button1'><Link to="/SignUp">SignUp</Link></button>
    </nav>
  );
}

export default Header;
