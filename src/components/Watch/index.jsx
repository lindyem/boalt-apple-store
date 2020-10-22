import React, { useState } from 'react';
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import Navbar from '../Navbar'; 
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';
import blackWatch from '../../assets/images/watch-black1.png';
import whiteWatch from '../../assets/images/watch-white1.png';
import iphone from '../../assets/images/IphoneIcon.png';
import computer from '../../assets/images/computer.png';
import watch from '../../assets/images/watch.png';
import whiteSelect from '../../assets/images/white-select.png';
import whiteSelected from '../../assets/images/white-selected.png';
import blackSelect from '../../assets/images/black-select.png';
import blackSelected from '../../assets/images/black-selected.png';

const Watch = (props) => {
  const history = useHistory();
  const [selectedWatch, setSelectedWatch] = useState('black');

  return (
   <div>
    <Navbar />                                                                  
    <motion.div className="watch"
      key="watch"
      initial={{ x: '-20vw', opacity: 0 }}
      animate={{ x: 0,  opacity: 1 }}
      transition={{ duration: 0.5 }}>
    <div className="watch__body">
      <div>
        <div className="watch__description">
          <div className="watch__subtitle">Apple Watch</div>
          <div className="watch__title">Change starts within.</div>
          <div className="watch__descriptionText">Apple Watch Series 4. Fundamentally redesigned and re‑engineered to help you be even more active, healthy, and connected. </div>
              <div className="watch__shipping">Starts Shipping {props.shippingDate}</div>
        </div> 
        <div className="watch__descriptionFooter">
          <div className="watch__priceContainer">
            <div className="watch__price">From $699</div>
            <div className="watch__buy">Buy Now {">"} </div>
          </div>
          </div>
      </div>
      <div className="watch__selectedWatch">
        { selectedWatch === 'black' ? 
          (
            <div>
            <motion.img
              key="blackWatch"
              src={blackWatch}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="watch__colorSelector">
                  <img src={whiteSelect} onClick={() => setSelectedWatch('white')}/>
                  <img src={blackSelected} />
                </div>
            </div>
          
          ) : (
            <div>
            <motion.img
              key="whiteWatch"
              src={whiteWatch}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
                  <div className="watch__colorSelector">
                  <img src={whiteSelected} />
                  <img src={blackSelect} onClick={() => setSelectedWatch('black')}/>
                </div>
            </div>
          )
        }
        
      </div>
      <div className="watch__iconsContainer"> 
        <div
            className="watch__icons"
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
    </div>
    
  )
}


export default Watch;











































































































































































































































































































