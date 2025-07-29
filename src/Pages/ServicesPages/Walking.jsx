import React from 'react'
import './Walking.css'

const Walking = () => {
  return (
    <div className='walking'>
      <h1 className="walking-header">Walking</h1>
      <section>
        <div className='walking-item'>
          <div className='walking-img'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/333.png' alt="Walking"/>
          </div>
          <div className='walking-text'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/11-130x130-1.png' alt="Walking Icon"/>
            <h1>Walking</h1>
            <p>Why make your fur babies wait for their favourite time of the day when you can book PawPurrfects 
               professional dog walking services? Our network of expert dog walkers ensure your pets get safe and 
               fun walks through the day while you ace your to-do lists, stress-free! Book our dog walking services 
               in just a few clicks for no more missed walks.</p>
          </div>
        </div>
        <div className='walking-icon-Container'>
          <h1>What We Cover</h1>
          <p className='line'></p>
          <div className='walking-icon-item'>
            <div className='walking-them'>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/30-1.png'/>
                </div>
                <p className='icons-text'>30 MINS</p>
              </div>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/45-2.png'/>
                </div>
                <p className='icons-text'>45 MINS</p>
              </div>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/60.png'/>
                </div>
                <p className='icons-text' >1 HOUR</p>
              </div>
            </div>
            <div className='walking-them'>
              <div className='icons'>
                <div className='icon-img'>
                  <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/monthly.png'/>
                </div>
                <p className='icons-text'>MONTHLY</p>
              </div>
              <div className='icons'>
                <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/multiple-times.png'/>
              </div>
              <p className='icons-text'>MULTIPLE TIMES A DAY</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/monthly-twice.png'/>
              </div>
              <p className='icons-text'>MONTHLY (TWICE / THRICE A DAY)</p>
            </div>
          </div>
          <div className='walking-them'>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/weekly.png'/>
              </div>
              <p className='icons-text'>WEEKLY</p>
            </div>
            <div className='icons'>
              <div className='icon-img'>
                <img src='https://pawpurrfect.co/wp-content/uploads/2021/11/weekly-twice.png'/>
              </div>
              <p className='icons-text'>WEEKLY (TWICE / THRICE A DAY)</p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

export default Walking
