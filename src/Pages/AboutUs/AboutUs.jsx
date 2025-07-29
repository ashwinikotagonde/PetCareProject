import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './AboutUs.css';
import AboutusImage from '../../assets/aboutus/aboutus.png'
import Aboutuslogo from '../../assets/aboutus/aboutus-logo.jpg';
import HalfImage from '../../assets/aboutus/half-image.jpg';
import MissionImage from '../../assets/aboutus/mission.jpg';
import VisionImage from '../../assets/aboutus/vision.jpeg';
import ValuesImage from '../../assets/aboutus/values.jpeg';
import petParent from '../../assets/aboutus/petparent.png';
import Petcare from '../../assets/aboutus/petcare.png';
import Petgrooming from '../../assets/aboutus/petgrooming.png';
import PetHealth from '../../assets/aboutus/pethealth.png';
import Petproduct from '../../assets/aboutus/petproduct.png';
import Team1 from '../../assets/aboutus/team-1.jpg';
import Team2 from '../../assets/aboutus/team-2.jpg';
import Team3 from '../../assets/aboutus/team-3.jpg';
import Team4 from '../../assets/aboutus/team-4.jpg'
import Dog from '../../assets/aboutus/dog.png';
import kitten from '../../assets/aboutus/kitten.png';
const AboutUs = () => {
  const [sections, setSections] = useState(['vision', 'mission', 'values']);

  const handleSectionClick = (index) => {
    setSections((prevSections) => {
      let newSections;
      if (index === 0) {
        // Move the first section to the end
        newSections = [...prevSections.slice(1), prevSections[0]];
      } else if (index === prevSections.length - 1) {
        // Move the last section to the front
        newSections = [prevSections[prevSections.length - 1], ...prevSections.slice(0, -1)];
      } else {
        // For other sections, move the clicked section to the front
        newSections = [prevSections[index], ...prevSections.slice(0, index), ...prevSections.slice(index + 1)];
      }
      return newSections;
    });
  };
  const scrollToNextSection = () => {
    document.querySelector('.about-us-section2').scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const titleElement = document.querySelector('.section2-title');
    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  return (
    <div className="about-us">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Papyrus&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Section 1 */}
      <section className="about-us-section1">
      < img src={AboutusImage} alt="About us Image" className="about-us-image"/>
        <div className="section1-content">
          <h1 className="about-us-title">About Us</h1>
          <h2 className="about-us-subtitle">Get to know more about us</h2>
          <img src={Aboutuslogo} alt="Logo" className="about-us-logo" />
        </div>
        <div className="arrow-down" onClick={scrollToNextSection}>
          &#8595;
        </div>
      </section>

      {/* Section 2 */}
      <section className="about-us-section2">
        <h1 className="section2-title">Why Choose Us!!!</h1>
        <img src={HalfImage} alt="Half in Section" className="half-image" />
        <div className="vision-and-mission">
          {sections.map((section, index) => (
            <div
              key={section}
              className={`${section}-container ${index === 0 ? 'centered' : ''}`}
              onClick={() => handleSectionClick(index)}
            >
              <img
                src={
                  section === 'vision'
                    ? VisionImage
                    : section === 'mission'
                    ? MissionImage
                    : ValuesImage
                }
                alt={section}
                className={`${section}-image`}
              />
              <div className={`${section}-text`}>
                <h2 className={`${section}-title`}>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                <p className={`${section}-content`}>
                  {section === 'vision'
                    ? 'Our vision is to create a world where every pet receives the love, care, and attention they deserve. We aim to empower pet owners with the knowledge, resources, and services to ensure the well-being and happiness of their furry companions. By promoting responsible pet ownership, compassionate care, and strong pet-human bonds, we aspire to make a positive impact on the lives of pets and their families, creating a healthier, happier world for pets everywhere.'
                    : section === 'mission'
                    ? 'Our mission is to provide comprehensive, reliable, and compassionate pet care services that cater to the physical, emotional, and nutritional needs of pets. We strive to offer expert advice, quality products, and personalized care to ensure pets live their best lives. Through our online platform, we aim to educate pet owners, promote adoption, and foster a community that prioritizes the health and happiness of pets, making pet care accessible and enjoyable for everyone.'
                    : 'At PawfectCare, we believe in providing the best care for pets while fostering a strong bond between them and their owners. Our core values of compassion, integrity, expertise, community, and responsibility guide everything we do. We are committed to treating every pet with the utmost love and respect, ensuring they receive the highest standard of care. With transparency and honesty, we build trust with pet owners.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='about-us-section3'>
      <h1 className="section3-title">What we can do for you!!!</h1>
      <img src={petParent} alt='Pet Parent' className='pet-parent'/>
      <div className="points-container">
    <div className="point point-1">
    <img src={PetHealth} alt="Logo 1" class="point-logo"/>
      <h3>Let us help you with your pet health and care</h3>
      <p>Our expert veterinarians are here to provide comprehensive care and guidance to ensure your pet stays in perfect health.</p>
    </div>
    <div className="point point-2">
    <img src={Petcare} alt="Logo 2" class="point-logo"/>
      <h3>Caring personal will take care of your pet</h3>
      <p>Your pet will be in good hands with our compassionate and well-trained staff, who treat every pet like family.</p>
    </div>
    <div className="point point-3">
    <img src={Petgrooming} alt="Logo 3" class="point-logo"/>
      <h3>Let us groom your precious and loved pet</h3>
      <p>From bathing to styling, we offer professional grooming services to keep your pet looking and feeling their best.</p>
    </div>
    <div className="point point-4">
    <img src={Petproduct} alt="Logo 4" class="point-logo"/>
      <h3>Quality Pet Products</h3>
      <p>Explore our curated range of pet supplies, including organic food, toys, and accessories, to pamper your companion.</p>
    </div>
    </div>
      </section>
      <section className="section-4">
      
  <div className="content-wrapper">
    {/* Left Content */}
    <div className="text-content">
      <h1>
        Our 
      </h1>
      <h2>Team</h2>
      <p>
      "Our team is a group of passionate pet lovers, experienced veterinarians, 
      and caregivers dedicated to keeping your furry, feathered, and scaly friends happy and healthy."
      </p>
    </div>
    <div className="content-wrapper">
    {/* Left Content - Two Stacked Images */}
    <div className="left-images">
      <img src={Team2} alt="Adventure 1" className="image-top" />
      <img src={Team3} alt="Adventure 2" className="image-bottom" />
    </div>
    {/* Right Content - Three Stacked Images */}
    <div className="right-images">
      <img src={Team1} alt="Adventure 4" className="image-2" />
      <img src={Team4} alt="Adventure 5" className="image-3" />
    </div>
  </div>
  
  </div>
  <img src={kitten} alt="Team" class="bottom-left-image"/>
</section>

    </div>
  );
};

export default AboutUs;

