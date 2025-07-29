import React from 'react'
import './Training.css'
import NeedHelp from '../../Components/NeedHelp/NeedHelp'

const training = () => {
  return (
    <div className='training-container'>
      <div className='training-header'>
        <h1>Training</h1>
        <button>back</button>
      </div>
      <section className='training-section'>
        <div className='training-from2'>
          <NeedHelp/>
        </div>
        <div className='training-page '>
          <div className='service-item'>
            <div className='service-img'>
              <img src='http://www.pawpurrfect.co/wp-content/uploads/2021/11/15-4.png' alt="Training"/>
            </div>
            <div className='service-text'>
              <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/7-130x130-1.png' alt="Training Icon"/>
                <h1>Training</h1>
                <p>Goodbye distractions and bad behaviour! Help your pets become their best selves with PawPurrfects 
                  expert pet training services. Our professionals work with dogs of all sizes, ages, and temperaments, 
                  and make dog training an enjoyable experience for your little ones. Book a pet training session in just
                  a few clicks and say yes to pawsome times!</p>
            </div>
          </div>
        </div>
        <div className='training-header2'>
            <h1>Training – Key Commands</h1>
            <p className='line'></p>
        </div>
        <div className='training-cover-header'>
          <h1>What We Cover</h1>
          <p className='line'></p>
        </div>
        <div className='training-blocks'>
          <div className='training-icons-container'>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/PET.png'/>
              </div>
              <div className='training-text'>COUNSELLING FOR NEW AND <br/> POTENTIAL PET PARENTS</div>
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/manners.png'/>
              </div>
              <div className='training-text'>MANNERS & OBEDIENCE</div>
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/leash-training.png'/>
              </div>
              <div className='training-text'>LEASH TRAINING</div>
            </div>
          </div>
          <div className='training-icons-container'>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/puppy-training.png'/>
              </div>
              <div className='training-text'>PUPPY TRAINING</div>
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/fearful.png'/>
              </div>
              <div className='training-text'>FEARFUL & ANXIOUS DOGS</div>
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/THERAPY.png'/>
              </div>
              <div className='training-text'>THERAPY DOG TRAINING</div>
            </div>
          </div>
          <div className='training-icons-container'>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/agression.png'/>
              </div>
              <div className='training-text'>AGGRESSION & REACTIVITY</div>
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/Novelty-training-1.png'/>
              </div>
              <div className='training-text'>NOVELTY TRAINING</div>
              
            </div>
            <div className='training-icons-items'>
              <div className='training-icon-img'>
                <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/CHAMPION-1.png'/>
              </div>
              <div className='training-text'>CHAMPIONSHIP DOGS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default training
