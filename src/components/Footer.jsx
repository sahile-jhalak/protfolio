import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {Socials} from '../utils/helper'
import HomeSocial from './HomeSocial'
import { FaDownload } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';


const Footer = ({ur}) => {
  return (
          
    <motion.div
    variants={slideIn("left", "tween", 0.2, 1)}
    className={`xl:mt-12 flex xl:flex-row items-center justify-center gap-10 overflow-hidden`}
    >
    
    <div className='relative z-5 bg-none'>  
        <div className=' w-full flex flex-col items-center justify-center mt-32 mb-12' >
            <p className=" font-bold text-white text-3xl tracking-wide text-texlight" >Connect <span className='text-purple-600'>with me..</span></p>
                <div className=" bg-none flex items-center justify-center gap-14 mt-10" >
                  <AnimatePresence>
                    {Socials && Socials.map((item, index) => (
                      <HomeSocial  key={index}  data={item} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
        </div>
        <div>
            <a 
                onClick={() => window.open("https://app.luminpdf.com/viewer/67196cd306545daf3625fe2f", "_blank")}
                className=" w-20  items-center cursor-pointer justify-center mt-2 mb-12 hover:text-purple-600" 
            >
                <p className=" w-full text-white font-bold text-2xl flex gap-0.5  items-center justify-center mt-5 mb-14 hover:text-purple-600" >Resume
                    <FaDownload className=' size-4 font-bold' />
                </p>
            </a>        
        </div>
        
    </div> 
        </motion.div>  
  )
}

export default Footer