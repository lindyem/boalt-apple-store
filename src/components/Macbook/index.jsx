import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import Navbar from '../Navbar'; 
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';
import blackWatch from '../../assets/images/watch-black1.png';
import whiteWatch from '../../assets/images/watch-white1.png';
import iphone from '../../assets/images/iphone-inactive-black.png';
import computer from '../../assets/images/mac-active-black.png';
import watch from '../../assets/images/watch-inactive-black.png';
import macbook from '../../assets/images/macbook.png';
import group from '../../assets/images/mac-group.png';

const Macbook = (props) => {
  const history = useHistory();

  return (
   <motion.div
    className="macbook"
    key="macbook"
    initial={{ x: '-100vw' }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Navbar />
    <motion.div
      className="macbook__descriptionContainer"
      key="macbook__descriptionContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="macbook__description">
        <motion.div
          key="macbook__description"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="macbook__subtitle">MacBook Pro</div>
          <div className="macbook__shipping">Starts Shipping {props.shippingDate}</div>
          <div className="macbook__title">More power. More pro</div>
        </motion.div>
        <motion.div
          className="macbook__descriptionText"
          key="macbook__descriptionText"
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="macbook__cpu">
            <div className="macbook__feature">8-core</div>
            <div className="macbook__subFeature">Intel processor</div>
          </div>
          <div className="macbook__ram">
            <div className="macbook__feature">32GB</div>
            <div className="macbook__subFeature">Memory</div>
          </div>
        </motion.div>
      </div>
      <div className="macbook__image">
        <img src={macbook}/>
        <div className="macbook__iconsContainer"> 
        <div
            className="macbook__icons"
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
          </div>
        </div>
      </div> 
    </motion.div>
    <div className="macbook__footer">
      <motion.div
        className="macbook__buy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >Buy Now {">"}</motion.div>
      <motion.img
        src={group}
        key="macbook__group"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      />
      <motion.div
        className="macbook__subscribe"
        key="macbook__subscribe"
        initial={{ y: 0 }}
        animate={{ y: -100 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="macbook__subscribeText">Subscribe Now</div>
        <div className="macbook__inputContainer">
          <input className="macbook__input" type="text" placeholder="Enter email address"/> <button className="macbook__button">Subscribe</button>
        </div>
      </motion.div>
    </div>                                                                 
  </motion.div>
  )
}


export default Macbook;
