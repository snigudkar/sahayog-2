
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Campaigns from './components/Campaigns'
import Testimonials from './components/Testimonials'
import Events from './components/Events'
import Footer from './components/Footer'
function App() {
 

  return (
    <>
      
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
      <HeroSection />
      <AboutUs />
      <Events/>
      <Campaigns/>
      <Testimonials/>
      <Footer/>
      
  </div>
    </>
  )
}

export default App
