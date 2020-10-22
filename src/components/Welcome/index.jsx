import React from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-grey.png';
import iphone from '../../assets/images/IphoneIcon.png';
import computer from '../../assets/images/computer.png';
import watch from '../../assets/images/watch.png';

const Welcome = (props) => {
  const history = useHistory();

  return (
    <motion.div className="welcome">
      <motion.div
        className="welcome__header"
        key="welcomeHeader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      
        <div className="welcome__logo" onClick={() => history.push('/comingProducts')}>
          <img src={appleLogoSmall} />
        </div>
        <div className="welcome__menuItems">
          <div className="welcome__menuLinks">
            <Link to={`/iphone`}>iPhone</Link>
            <Link to={`/mbp`}>MacBook Pro</Link>
            <Link to={`/watch`}>Watch</Link>
          </div>
          <div >
            <button className="welcome__menuButton">Notify Me</button>
          </div>
        </div>
      </motion.div>
      <motion.div className="welcome__body"
        key="welcomeBody"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
            width="20"
            height="29"
            onClick={() => history.push('/iphone')}
          />
           <img
            src={computer}
            width="30"
            height="29"
            onClick={() => history.push('/mbp')}
           
          />
           <img
            src={watch}
            width="20"

                        height="29"
watch          />
watch          />
        </motion.div>
      </motion.div>
    </motion.div>  )
}


export default Welcome;











































































































































































































































































































