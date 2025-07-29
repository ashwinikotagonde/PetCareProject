import React from 'react'
import './Veterinarian.css'

const Veterinarian = () => {
  return (
    <div className='veterinarian'>
      <h1 className='veterinarian-header'>Veterinarian</h1>
      <section>
      <div className='veterinarian-box'>
        <div className='veterinarian-img'>
          <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/45-1.png' alt="Sitting"/>
        </div>
        <div className='veterinarian-text'>
          <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/9-130x130-1.png' alt="Veterinarian Icon"/>
          <h1>Veterinarian</h1>
          <p>Bringing your pets to the vet can be quite a task! But not any more, as we bring quality veterinary
            care to the comfort of your home. We know your pets are your world and with our expert veterinary 
            services, we ensure they are taken care of at all times. Book expert veterinary services in just a 
            few clicks and say yes to happy and healthy pets.
          </p>
        </div>
      </div>
      <div className='veterinarian-cover'>
        <h1>What We Cover</h1>
        <p className='line'></p>
        <div className='veterinarian-icon-item'>
        <div className='veterinarian-them'>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/vaccination.png'/>
                </div>
                <p className='icons-text'>VACCINATION</p>
              </div>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/DEWORMING-1.png'/>
                </div>
                <p className='icons-text'>DEWORMING</p>
              </div>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/general-checkup.png'/>
                </div>
                <p className='icons-text' >GENERAL CHECKUP</p>
              </div>
            </div>
            <div className='veterinarian-them'>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='	https://pawpurrfect.co/wp-content/uploads/2021/11/accidental-injury.png'/>
                </div>
                <p className='icons-text'>ACCIDENTAL/MINOR INJURY</p>
              </div>
            </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Veterinarian
