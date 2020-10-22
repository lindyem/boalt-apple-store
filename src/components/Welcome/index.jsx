import React from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import Navbar from '../Navbar';
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-grey.png';
import iphone from '../../assets/images/iphone-inactive-white.png';
import computer from '../../assets/images/mac-inactive-white.png';
import watch from '../../assets/images/watch-inactive-white.png';

const Welcome = (props) => {
  const history = useHistory();

  return (
    <motion.div
      className="welcome"
      key="welcomeBody"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <div className="welcome__body"
        
      >
        <motion.img 
          src={appleLogoBig}
          key="welcomeImage"
          className="welcome__image"
          width="292.5"
          height="275.5"
        />
        <motion.div
          key="welcomeText"
          className="welcome__text"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Apple
        </motion.div>
        <motion.div 
          className="welcome__subText"
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          See our Products
        </motion.div>
        <motion.div
          className="welcome__icons"
          initial={{ transform: 'scale(1.5, 1.5)'}}
          animate={{ transform: 'scale(1, 1)'}}
          transition={{ duration: 1 }}
        >
          <img
              src={iphone}
              width="15"
              height="29"
              onClick={() => history.push('/iphone')}
            />
            <img
              src={computer}
              width="39"
              height="23"
              onClick={() => history.push('/mbp')}
            
            />
            <img
              src={watch}
              width="19"
              height="31"
              onClick={() => history.push('/watch')}
            />
        </motion.div>
      </div>
    </motion.div>  )
}


export default Welcome;











































































































































































































































































































