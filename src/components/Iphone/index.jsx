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
import iphone from '../../assets/images/IphoneIcon.png';
import computer from '../../assets/images/computer.png';
import watch from '../../assets/images/watch.png';


const Iphone = (props) => {
  const history = useHistory();
  const [selectedIphone, setSelectedIphone] = useState('black');

  return (
    <motion.div className="iphone"
      key="iphone page"
      initial={{ y: '100vh' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
    <div
      className="iphone__header"
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
    </div>
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
      <div className="iphone__iconsContainer"> 
        <div
            className="iphone__icons"
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
              onClick={() => history.push('/mbp')}
            />
          </div>
        </div>
      </div>   
    </motion.div>
  )
}


export default Iphone;











































































































































































































































































































