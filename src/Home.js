import React from 'react'
import './Home.css'
import Hero from "./components/Hero";
import Join from "./components/join/join";
import Reason from "./components/Reasons/Reason";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from './components/Footer/Footer';
import { Programs } from './components/Programs/Programs';
import Footer2 from './components/Footer2/Footer2';


function Home() {
  return (
    <div className='home'>
          <Hero />
          <Programs />
          <Reason />
          {/* Carousel */}
          <Testimonials />
          <Join />
          <Footer />
          <Footer2 />
    </div>
  )
}

export default Home