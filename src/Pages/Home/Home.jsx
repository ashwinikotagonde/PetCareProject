import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import NeedHelp from '../../Components/NeedHelp/NeedHelp'
import Achievements from '../../Components/Achivements/Achievements'
import HomeServices from '../../Pages/HomeServices/HomeServices'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <NeedHelp/>
      <HomeServices/> 
      <Achievements/>
    </div>
  )
}

export default Home
