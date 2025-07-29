import React from 'react'
import './Sitting.css'

const Sitting = () => {
  return (
    <div className='sitting'>
      <div className='sitting-header'>
        <h1>Sitting</h1>
        <button>back</button>
      </div>
      <section>
      <div className='sitting-item'>
        <div className='sitting-img'>
          <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/45-1.png' alt="Sitting"/>
        </div>
        <div className='sitting-text'>
          <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/8-130x130-1.png' alt="Sitting Icon"/>
          <h1>Sitting</h1>
          <p>A PawPurrfect solution to ensure your pet is never home alone! Whether youre away at work, on a 
            short trip, or just running a few errands, our professional pet sitting services ensure your fur 
            babies are well cared for while youre away. Book our pet sitting services in just a few clicks and 
            say goodbye to all those stressful looks at the pet cam.
          </p>
        </div>
      </div>
      <div className='sitting-iconContainer'>
        <h1>What We Cover</h1>
        <p className='line'></p>
        <div className='sitting-icon-item'>
          <div className='sitting-them'>
            <div className='icons'>
            < div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/2-h.png'/>
              </div>
              <p className='icons-text'>2 HOURS</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/4-1.png'/>
              </div>
              <p className='icons-text'>4 HOURS</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/8-hours.png'/>
              </div>
              <p className='icons-text' >8 HOURS</p>
            </div>
          </div>
          <div className='sitting-them'>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/12-hours.png'/>
              </div>
              <p className='icons-text'>12 HOURS</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/24-1.png'/>
              </div>
              <p className='icons-text'>24 HOURS</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/multiple-hts.png'/>
              </div>
              <p className='icons-text'>MULTIPLE HOURS PER DAY</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Sitting
