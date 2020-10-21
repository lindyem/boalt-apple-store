import React from 'react';
import { motion } from "framer-motion"
import { useHistory } from "react-router-dom";
import Reel from 'react-reel';
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';

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


const ComingProducts = (props) => {
  const history = useHistory();

  return (
    <div className="comingProducts" onClick={() => history.push('/welcome')}>
      <motion.div
        className="comingProducts__header"
        key="comingProductsHeader"
        initial={{ height: '20px'}}
        animate={{ height: '100px'}}
        // exit={{ x: '-70vw'}}
        transition={{ duration: 1 }}
      >
        <motion.img src={appleLogoSmall}/>
      </motion.div>
      <motion.div className="comingProducts__body"
        key="comingProductsBody"
        initial={{ transform: 'scale(1, 1)'}}
        animate={{ transform: 'scale(0.9, 0.95)'}}
        // exit={{ x: '-70vw'}}
        transition={{ duration: 1 }}
      >
        <motion.img 
          src={appleLogoBig}
          className="comingProducts__image"
          width="325"
          height="290"
          initial={{opacity: 0, transform: 'scale(0.5, 0.5)'}}
          animate={{ transform: 'scale(1, 1)', opacity: 1}}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="comingProducts__text"
          initial={{opacity: 0, transform: 'scale(1.5, 1.5)', y: 100}}
          animate={{ transform: 'scale(1, 1)', opacity: 1, y: 0}}
          transition={{ duration: 1 }}
        >
          New Products Coming This Summer
        </motion.div>
        <div className="comingProducts__reel">
          <Reel text="2019" theme={theme}/>
        </div>
      </motion.div>
    </div>
  )
}


export default ComingProducts;































































































































































































































































































