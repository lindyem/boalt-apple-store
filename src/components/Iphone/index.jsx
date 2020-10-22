import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';
import smallBlackIphone from '../../assets/images/iphone-small-black.png';
import smallRoseIphone from '../../assets/images/iphone-small-rose.png';
import largeBlackIphone from '../../assets/images/iphone-large-black.png';
import largeRoseIphone from '../../assets/images/iphone-large-rose-back.png';
import fadedBlackIphone from '../../assets/images/iphone-small-black-fade.png';
import fadedRoseIphone from '../../assets/images/iphone-small-rose-fade.png';


const Iphone = (props) => {
  const history = useHistory();
  const [selectedIphone, setSelectedIphone] = useState('black');

  return (
    <div className="iphone">
    <motion.div
      className="iphone__header"
      key="iphoneHeader"
      // initial={{ y: '100vh' }}
      // animate={{ y: 0 }}
      // transition={{ duration: 1 }}
    >
    
      <div className="iphone__logo" onClick={() => history.push('/comingProducts')}>
        <img src={appleLogoSmall} />
      </div>
      <div className="iphone__menuItems">
        <div className="iphone__menuLinks">
          <Link to={`/iphone`}>iPhone</Link>
          <Link to={`/mbp`}>MacBook Pro</Link>
          <Link to={`/watch`}>Watch</Link>
        </div>
        <div >
          <button className="iphone__menuButton">Notify Me</button>
        </div>
      </div>
    </motion.div>
    <div className="iphone__body">
      <div>
        <div className="iphone__description">
          <div className="iphone__subtitle">Iphone</div>
          <div className="iphone__title">The ultimate iPhone</div>
          <div className="iphone__descriptionText">The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!</div>
          <div className="iphone__shipping">Iphone</div>
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
      <div></div>
    </div>
  </div>
  )
}


export default Iphone;











































































































































































































































































































