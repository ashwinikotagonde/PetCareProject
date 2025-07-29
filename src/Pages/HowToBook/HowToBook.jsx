import React from 'react'
import './HowToBook.css';
import ForPetParents from '../ForPetParents/ForPetParents';
import ExpertRegistration from '../ExpertRegistration/ExpertRegistration';


const HowToBook = () => {
  return (
    <div className="how-to-book">
      <h1>How to Book</h1>
      <ForPetParents/>
      <ExpertRegistration/>
    </div>
  )
}

export default HowToBook
