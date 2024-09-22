import React,{useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import { slideIn } from '../utils/motion';


const HomeSocial = ({data, index}) => {
    const [isHoverred, setIsHoverred] = useState(false);
    
    return (
      <motion.a
       key={index}
       href={data.uri}
       content={data.content}
       variants={slideIn("left", "tween", 0.2, 1)}
      className=" w-12 h-12 rounded-full bg-gradient-to-br   relative  p-[2px] cursor-pointer"
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
      >
        <AnimatePresence>
  
          {isHoverred && (
            <motion.div className={`absolute inset-1 blur-md bg-gradient-to-br from-primary to-secondary -z-10`} >
            </motion.div>)}
  
          <div className=" w-full h-full rounded-full hover:bg-purple-700 flex items-center justify-center " >
            <data.Icon className={`text-texlight`} />
          </div>
        </AnimatePresence>
      </motion.a>
    );
}

export default HomeSocial 