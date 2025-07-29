import React from 'react'
import './Boarding.css'

const Boarding = () => {
  return (
    <div className='Boarding'>
      <div className='boarder-header'>
        <h1>Bording</h1>
        <button>back</button>
      </div>
      <section className="Boarding-section">
        <div className='boarding-item'>
          <div className='boarding-img'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/44-1.png' alt="Boarding"/>
          </div>
          <div className='boarding-text'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/10-130x130-1.png' alt="Boarding Icon"/>
            <h1>Boarding</h1>
            <p>No more cancelled work trips and vacays! With PawPurrfects comprehensive pet boarding services we 
              ensure your fur babies have a home away from home every time youre away. Our expert services ensure 
              your pets are cared for and pampered like they would be at home. Book a fun staycation for your pets 
              in just a few clicks and enjoy a care-free trip.
            </p>
          </div>
        </div>
        <div className='boarding-iconsContainer'>
          <h1>what we cover</h1>
          <p className='line'></p>
          <div className='icons-container'>
            <div className='icons'>
              <div><img src='https://pawpurrfect.co/wp-content/uploads/2021/11/daily.png'/></div>
              <p>DAILY</p>
            </div>
            <div className='icons'>
              <div><img src='https://pawpurrfect.co/wp-content/uploads/2021/11/weekly.png'/></div>
              <p>WEEKLY</p>
            </div>
            <div className='icons'>
              <div><img src='https://pawpurrfect.co/wp-content/uploads/2021/11/monthly.png'/></div>
              <p>MONTHLY</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Boarding
