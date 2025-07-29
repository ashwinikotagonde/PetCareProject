import React from 'react'
import './Grooming.css'
import grooming_img from '../../assets/grooming_img.png'
import NeedHelp from '../../Components/NeedHelp/NeedHelp'

const Grooming = () => {
  return (
    <div className='grooming-container'>
      <div className='grooming-header'>
            <h1>Grooming</h1>
            <button>Back</button>
        </div>
      <section className='grooming-section'>
        <div className='grooming-from'>
          <NeedHelp/>
        </div>
        <div className='Grooming-main1'>
        <div className='service-img'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/12.png' alt="Grooming"/>
        </div>
        <div className='service-text'>
            <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/12/7-130x130-1.png' alt="Grooming Icon"/>
            <h1>Grooming</h1>
            <p>That feeling of a fresh haircut and manicure. Divine. Isnt it? Your cats and dogs love it too! 
            PawPurrfects versatile range of pet grooming services ensure that your fur baby looks and feels 
            their best, and is groomed to perfection by the professionals. Book a pet grooming session at home 
            in just a few clicks, and enjoy the PawPurrfect experience.</p>
          </div>
        </div>
        <div className='grooming-whyPet'>
          <h1>Why Pet Grooming Is Essential?</h1>
          <p className='line'></p>
          <div className='grooming-main2'>
            <div className='grooming-text'>
              <ul>
                <li>Brushing removes oil-clogging pores are removed and stimulates the production of oil, which ensures a glossy sheen on the coat.</li>
                <li>Grooming alleviates the unpleasant odour and keeps your pet smelling healthy again!</li>
                <li>Keeping the inside of the pet’s ear clean prevents ear infections.</li>
                <li>While brushing, professional groomers can spot ticks and fleas and remove them.</li>
                <li>Trimming the butt hair also ensures hygiene in the posterior region.</li>
                <li> Grooming keeps your pet’s skin clean, dander-free, and prevents skin diseases.</li>
                <li>Eye crusts make the eyes sore, removing eye crust helps the pet to see better, and it also alleviates eye damage.</li>
                <li>Keeping the nails trimmed ensures that your pet doesn’t hurt you or other pets; it also enables the pet to walk properly.</li>
                <li>Trimming facial hair makes your pet look awesome and feel comfortable, it also enables them to eat properly.</li>
                <li>Professional pet grooming controls pet shedding, so you do not have to deal with piles of hair all over your home!</li>
                <li>Paw fur trimming reduces the chances of tracking dirt into the house and also minimizes the risk of foot infections.</li>
                <li>ps its mouth healthy and free from harmful bacteria.</li>
              </ul>
            </div>
          <div className='grooming-img'>
            <img src={grooming_img} alt='grooming-img'/>
          </div>
          </div>
        </div>
      
        <div className='grooming-whatDoes'>
          <h1>What Does Pet Grooming Include?</h1>
          <p className='line'></p>
          <div className='grooming-main3'>
            <div className='grooming-img2'>
              <img src='https://www.pawpurrfect.co/wp-content/uploads/2022/08/Dog-Grooming.jpg'alt='dog-grooming'/>
            </div>
            <div className='grooming-text2' >
              <h2>The Paw Purrfect Grooming Assurance</h2>
              <p>Book pet grooming service with us and be assured of –</p>
              <ul>
                <li><strong>Personalized Grooming Service for Your Pet –</strong> 
                    Your furry friend enjoys a personalized & full salon-like grooming service sitting at home.</li>
                <li><strong>Certified pet groomers by Paw Purrfect –</strong> 
                    Our pet stylists have undergone pet grooming training and are qualified to groom your dog. 
                    Rest assured, your pet gets the best grooming services he deserves!</li>
                <li><strong>Hassle-free Experience For Pet Parents –</strong> 
                    Our pet groomer brings all the equipment to your home. So, you do not have to stress about anything. 
                    Even post-grooming, they will help you clean your house and keep it fur-free.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='grooming-cover'>
          <div>
          <h1>What We Cover</h1>
          <p className='line'></p>

          <div className='grooming-Dog-icons'>
             <h1>DOG</h1>
             <p className='grye-line'></p>

            <div className='grooming-Dog-block'>
             <div className='grooming-Dog-container1'>
              <div className='grooming-Dog-items'>
                <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/washing.png'/>
                </div>
                <div className='g-text1'>WASHING</div>
                <div className='g-text2'>Full body deep clean</div>
              </div>
              <div className='grooming-Dog-items'>
              <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/drying.png'/>
                </div>
                <div className='g-text1'>DRYING</div>
                <div className='g-text2'>Towel or blow drying as per preference</div>
              </div>
              <div className='grooming-Dog-items'>
                <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/TRIMMING.png'/>
                </div>
                <div className='g-text1'>HAIR TRIMMING / CLUMP REMOVALS</div>
                <div className='g-text2'>Trimming or zero cut as needed of full body or specific parts</div>
              </div>
             </div>

             <div className='grooming-Dog-container2'>
              <div className='grooming-Dog-items'>
                <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/STYLING.png'/>
                </div>
                <div className='g-text1'>HAIR STYLING</div>
                <div className='g-text2'>As per preference</div>
              </div>
              <div className='grooming-Dog-items'>
              <div className='dog-icons'>
                  <img src='	https://www.pawpurrfect.co/wp-content/uploads/2021/11/nail.png'/>
                </div>
                <div className='g-text1'>NAIL TRIMMING</div>
                <div className='g-text2'>Only tips cutting</div>
              </div>
              <div className='grooming-Dog-items'>
                <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/EAR-CLEANING.png'/>
                </div>
                <div className='g-text1'>EARS CLEANING</div>
                <div className='g-text2'>With pet specific products</div>
              </div>
             </div>

             <div className='grooming-Dog-container3'>
              <div className='grooming-Dog-items'>
                <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/teething.png'/>
                </div>
                <div className='g-text1'>TEETH CLEANING</div>
                <div className='g-text2'>With pet specific products</div>
              </div>
              <div className='grooming-Dog-items'>
              <div className='dog-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/mite-treatments.png'/>
                </div>
                <div className='g-text1'>TICK, FLEAS AND MITE TREATMENTS</div>
                <div className='g-text2'>Medicated bath, tick/mite removal by hand, dry brush</div>
              </div>
            </div>
            </div>
          </div>
          <div className='grooming-cat-icons'>
              <h1>CAT</h1>
              <p className='grye-line'></p>

            <div className='grooming-cat-block'>
              <div className='grooming-Cat-container1'>
              <div className='grooming-Cat-items'>
                <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/CAT-BATHINH.png'/>
                </div>
                <div className='g-text1'>WASHING</div>
                <div className='g-text2'>Full body deep clean</div>
              </div>
              <div className='grooming-Cat-items'>
              <div className='Cat-icons'>
                  <img src='	https://www.pawpurrfect.co/wp-content/uploads/2021/11/CAT-DRYING.png'/>
                </div>
                <div className='g-text1'>DRYING</div>
                <div className='g-text2'>Towel or blow drying as per preference</div>
              </div>
              <div className='grooming-Cat-items'>
                <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/CUTTING.png'/>
                </div>
                <div className='g-text1'>HAIR TRIMMING / CLUMP REMOVALS</div>
                <div className='g-text2'>Trimming or zero cut as needed of full body or specific parts</div>
              </div>
             </div>

             <div className='grooming-Cat-container2'>
              <div className='grooming-Cat-items'>
                <div className='Cat-icons'>
                  <img src='	https://www.pawpurrfect.co/wp-content/uploads/2021/11/CAT-GROOMING.png'/>
                </div>
                <div className='g-text1'>HAIR STYLING</div>
                <div className='g-text2'>As per preference</div>
              </div>
              <div className='grooming-Cat-items'>
              <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/ail.png'/>
                </div>
                <div className='g-text1'>NAIL TRIMMING</div>
                <div className='g-text2'>Only tips cutting</div>
              </div>
              <div className='grooming-Cat-items'>
                <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/cat-ear-cleaning.png'/>
                </div>
                <div className='g-text1'>EARS CLEANING</div>
                <div className='g-text2'>With pet specific products</div>
              </div>
             </div>

             <div className='grooming-Cat-container3'>
              <div className='grooming-Cat-items'>
                <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/cat-brushing.png'/>
                </div>
                <div className='g-text1'>TEETH CLEANING</div>
                <div className='g-text2'>With pet specific products</div>
              </div>
              <div className='grooming-Cat-items'>
              <div className='Cat-icons'>
                  <img src='https://www.pawpurrfect.co/wp-content/uploads/2021/11/mite-tearments.png'/>
                </div>
                <div className='g-text1'>TICK, FLEAS AND MITE TREATMENTS</div>
                <div className='g-text2'>Medicated bath, tick/mite removal by hand, dry brush</div>
              </div>

             </div>
            </div>

          </div>     
        </div>
      </div>
      </section>
    </div>
  )
}

export default Grooming
