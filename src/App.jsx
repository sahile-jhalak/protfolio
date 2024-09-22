import {AnimatePresence} from 'framer-motion';
import {BrowserRouter} from 'react-router-dom';
import {About, Contact,HomeSocial, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import {Socials} from './utils/helper'
import { motion } from "framer-motion";
import { slideIn} from "./utils/motion";
import Footer from './components/Footer';

const  App = () => {

  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary' >
          <div className=' bg-hero-pattern bg-cover bg-no-repeat bg-center' >
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
          <About />
          <Tech />
          <Works />
          <div className='relative z-0' >
              <Contact />
              <Footer/>
              <StarsCanvas />
          </div>

          {/* Footer */}

          
          
        </div>
        
      </BrowserRouter>
  )
}

export default App
