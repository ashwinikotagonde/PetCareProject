import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Services/Services';
import Grooming from './Pages/ServicesPages/Grooming';
import Training from './Pages/ServicesPages/Training';
import Boarding from './Pages/ServicesPages/Boarding';
import Sitting from './Pages/ServicesPages/Sitting';
import Walking from './Pages/ServicesPages/Walking';
import Veterinarian from './Pages/ServicesPages/Veterinarian';
import PetPathologyTests from './Pages/ServicesPages/PetPathologyTests';
import HowToBook from './Pages/HowToBook/HowToBook';
import ForPetParents from './Pages/ForPetParents/ForPetParents';
import ExpertRegistration from './Pages/ExpertRegistration/ExpertRegistration';
import Adoption from './Pages/Adoption/Adoption'
import Blog from './Pages/Blog/Blog';
import ConnectUs from './Components/ConnectUs/ConnectUs';
import Footer from './Pages/Footer/Footer';
import HomeServices from './Pages/HomeServices/HomeServices';
import SignUp from './Components/SignUp/SignUp';
import Privacy from './Pages/Privacy/Privacy';



const App = () => {
   

  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/HomeServices' element={<HomeServices/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path="/Grooming" element={<Grooming />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Boarding" element={<Boarding />} />
        <Route path="/Sitting" element={<Sitting />} />
        <Route path="/Walking" element={<Walking />} />
        <Route path="/Veterinarian" element={<Veterinarian />} />
        <Route path="/PetPathologyTests" element={<PetPathologyTests />} />
        <Route path='/how-To-Book' element={<HowToBook/>}/>
        <Route path='/ForPetParents' element={<ForPetParents />} /> 
        <Route path='/ExpertRegistration' element={<ExpertRegistration />} /> 
        <Route path='/Adoption' element={<Adoption/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/connectUs' element={<ConnectUs/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      <Footer/>

      
    </div>
  )
}

export default App

