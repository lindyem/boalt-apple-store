import React from 'react';
import Reel from 'react-reel';
import appleLogoSmall from '../../assets/images/apple-32.png';
import appleLogoBig from '../../assets/images/apple-512.png';

const theme = {
  reel: {
    height: "1em",
    display: "flex",
    alignItems: "flex-end",
    overflowY: "hidden",
    fontSize: "25px",
    fontWeight: "300",
    color: "#000000",
    lineHeight: "0.95em"
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
  return (
    <div className="welcome">
      <div className="welcome__header">
        <img src={appleLogoSmall}/>
      </div>
      <div className="welcome__body">
        <div className="welcome__mainContent">
          <div className="welcome__text">New Products Coming This Summer</div>
        </div>
        <Reel text="2019" theme={theme}/>
      </div>
    </div>
  )
}


export default Welcome;
