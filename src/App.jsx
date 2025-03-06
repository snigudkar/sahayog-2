
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Campaigns from './components/Campaigns'
import Testimonials from './components/Testimonials'
import Events from './components/Events'
import Footer from './components/Footer'
import Login from "./components/Login";
import Signup from "./components/Signup";
//import { Route, Router, Routes} from 'react-router-dom';

//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <>
      {/* Define your routes */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<HeroSection handleLogout={handleLogout} />} /> */}
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/aboutus" element={<AboutUs />} />
         </Routes>
         </Router>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <AboutUs />
      <Events/>
      {/* <Campaigns/> */}
      <Testimonials/>
      <Footer/>

      
  </div>
    </>
  )
}

export default App


