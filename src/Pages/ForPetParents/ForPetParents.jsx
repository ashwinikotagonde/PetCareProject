import React from 'react';
import './ForPetParents.css';
import signUpImg from '../../assets/Signup Button.jpg';
import serviceImg from '../../assets/services.png';
import detailsImg from '../../assets/details.png';
import submitImg from '../../assets/submit.png';
import connectImg from '../../assets/connect.png';
import { Link } from 'react-router-dom';
import step1Bg from '../../assets/step1-bg.jpg';
import step2Bg from '../../assets/step2-bg.jpg';
// import step3Bg from '../../assets/step3-bg.jpg';
import step4Bg from '../../assets/step4-bg.jpg';
import step5Bg from '../../assets/step5.jpg';

const ForPetParents = () => {
  const steps = [
    { 
      number: "1", 
      title: "Sign Up", 
      link: "/signup", 
      description: "Create an account or log in to access booking services.",
      image: signUpImg,
      backgroundImage: step1Bg
    },
    { 
      number: "2", 
      title: "Go to Service Page", 
      description: "Navigate to the Services section and choose the required service.", 
      image: serviceImg,
      backgroundImage: step2Bg
    },
    { 
      number: "3", 
      title: "Fill the Details", 
      description: "Enter details like your name, pet’s name, email, and mobile number.", 
      image: detailsImg,
      // backgroundImage: step3Bg
      
    },
    { 
      number: "4", 
      title: "Click Submit", 
      description: "Submit the form to confirm your booking request.", 
      image: submitImg,
      backgroundImage: step4Bg
    },
    { 
      number: "5", 
      title: "We Will Connect With You", 
      description: "Our team will reach out to you within 3-4 hours of booking.", 
      image: connectImg,
      backgroundImage: step5Bg
    }
  ];

  return (
    <div className="pet-parents-container">
      <h1 className="title">How to Book for Pet Parents 🐾</h1>
      <p className="subtitle">Follow these simple steps to book a service for your pet.</p>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div 
            key={step.number} 
            className={`step ${index % 2 === 0 ? 'left' : 'right'}`}
            style={ step.backgroundImage ? { 
              width:'100%',
              backgroundImage: `url(${step.backgroundImage})`, 
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              minHeight: '100vh' /* Ensures full viewport height */
            } : {} }
          >
            {index % 2 === 0 ? (
              <>
                <div className="step-text">
                  <h3>
                    {step.link ? <Link to={step.link} className="step-link">{step.title}</Link> : step.title}
                  </h3>
                  <p>{step.description}</p>
                </div>
                <img src={step.image} alt={step.title} className="step-image" />
              </>
            ) : (
              <>
                <img src={step.image} alt={step.title} className="step-image" />
                <div className="step-text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button className="book-now-btn">Book Now</button>
    </div>
  );
};

export default ForPetParents;
