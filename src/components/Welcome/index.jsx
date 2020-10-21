import React from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import Reel from 'react-reel';
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-grey.png';
import iphone from '../../assets/images/iphone.png';
import computer from '../../assets/images/computer.png';
import watch from '../../assets/images/watch.png';

const theme = {
  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    fontSize: "75px",
    fontWeight: "300",
    color: "#000000",
    lineHeight: "0.95em",
    justifyContent: "center",
    fontFamily: "Poppins",
    fontWeight: "bold",
  },
  group: {
    transitionDelay: "0ms",
    transitionTimingFunction: "ease-in-out",
    transform: "translate(0, 0)",
    height: "1em"
  },
  number: {
    height: "1em"
  }
};


const Welcome = (props) => {
  const history = useHistory();

  return (
    <motion.div className="welcome" onClick={() => history.push('/welcome')}>
      <motion.div
        className="welcome__header"
        key="welcomeHeader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      
        <div className="welcome__logo" ><img src={appleLogoSmall} /></div>
        <div className="welcome__menuItems">
          <div className="welcome__menuLinks">
            <Link to={`/comingProducts`}>iPhone</Link>
            <Link to={`/comingProducts`}>MacBook Pro</Link>
            <Link to={`/comingProducts`}>Watch</Link>
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
        >
          Welcome to Apple
        </motion.div>
        <div className="welcome__subText">
          See our Products
        </div>
        <div className="welcome__icons">
          <img
            src={iphone}
            width="20"
            height="29"
          />
           <img
            src={computer}
            width="30"
            height="29"
          />
           <img
            src={watch}
            width="20"
            height="29"
          />
        </div>
      </motion.div>
    </motion.div>  )
}


export default Welcome;











































































































































































































































































































