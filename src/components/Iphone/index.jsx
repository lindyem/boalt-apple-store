import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import Navbar from '../Navbar';
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';
import smallBlackIphone from '../../assets/images/iphone-small-black.png';
import smallRoseIphone from '../../assets/images/iphone-small-rose.png';
import largeBlackIphone from '../../assets/images/iphone-large-black.png';
import largeRoseIphone from '../../assets/images/iphone-large-rose-back.png';
import fadedBlackIphone from '../../assets/images/iphone-small-black-fade.png';
import fadedRoseIphone from '../../assets/images/iphone-small-rose-fade.png';
import iphone from '../../assets/images/iphone-active-white.png';
import computer from '../../assets/images/mac-inactive-white.png';
import watch from '../../assets/images/watch-inactive-white.png';


const Iphone = (props) => {
  const history = useHistory();
  const [selectedIphone, setSelectedIphone] = useState('black');

  return (
    <motion.div className="iphone"
      key="iphone"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
    <Navbar />
       
    <div className="iphone__body">
      <div className="iphone__descriptionContainer">
        <div className="iphone__description">
          <div className="iphone__subtitle">Iphone</div>
          <div className="iphone__title">The ultimate iPhone</div>
          <div className="iphone__descriptionText">The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!</div>
          <div className="iphone__shipping">Starts Shipping {props.shippingDate}</div>
        </div> 
        <div className="iphone__descriptionFooter">
          <div className="iphone__priceContainer">
            <div className="iphone__price">From $699</div>
            <div className="iphone__buy">Buy Now > </div>
          </div>
            {
              selectedIphone === 'black' ? (
                <div className="iphone__colorSelector">
                  <img src={smallBlackIphone} />
                  <img src={fadedRoseIphone} onClick={() => setSelectedIphone('rose')}/>
                </div>
              ) : (
              <div className="iphone__colorSelector">
                  <img src={fadedBlackIphone} onClick={() => setSelectedIphone('black')}/>
                  <img src={smallRoseIphone} />
              </div>)
            }
          </div>
      </div>
      <div className="iphone__selectedIphone">
        { selectedIphone === 'black' ? 
          <motion.img key="blackIphone" initial={{ x: '40vw' }} animate={{ x: 0 }} transition={{ duration: '0.2' }} src={largeBlackIphone} /> : <motion.img key="roseIphone"  initial={{ x: '40vw' }} animate={{ x: 0 }} transition={{ duration: '0.2' }} src={largeRoseIphone} />
        }
      </div>
      <div className="iphone__iconsContainer"> 
        <div
            className="iphone__icons"
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
  )
}


export default Iphone;

















