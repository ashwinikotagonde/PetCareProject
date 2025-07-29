import React from 'react';
import Slider from 'react-slick';
import './HomeServices.css';
import { Link } from 'react-router-dom';

import logo1 from '../../assets/logoimg/logo1.png';
import logo2 from '../../assets/logoimg/logo2.png';
import logo3 from '../../assets/logoimg/logo3.png';
import logo4 from '../../assets/logoimg/logo4.png';
import logo5 from '../../assets/logoimg/logo5.png';
import logo6 from '../../assets/logoimg/logo6.png';
import logo7 from '../../assets/logoimg/logo7.png';

const logos = [
  { src: logo1, label: "Grooming", link: "/Grooming" },
  { src: logo2, label: "Training", link: "/Training" },
  { src: logo3, label: "Boarding", link: "/Boarding" },
  { src: logo4, label: "Sitting", link: "/Sitting" },
  { src: logo5, label: "Walking", link: "/Walking" },
  { src: logo6, label: "Veterinarian", link: "/Veterinarian" },
  { src: logo7, label: "Pet Pathology Tests", link: "/PetPathologyTests" },
];

const HomeServices = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div className="HomeServices">
      <h1>SERVICES</h1>
      <p className="services-description">
        We offer a range of high-quality pet care services to ensure your furry friends receive the best care possible.
      </p>
      <div className="Home-services-container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img
                src={logo.src}
                alt={logo.label}
                width="130"
                height="130"
                loading="lazy"
              />
              <Link to={logo.link}> 
                <p>{logo.label}</p>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default HomeServices;