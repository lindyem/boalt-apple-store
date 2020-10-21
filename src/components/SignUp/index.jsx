import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (
    <motion.div
      key="signUp"
      initial={{ x: '70vw'}}
      animate={{ x: 0}}
      transition={{ duration: '0.1' }}
    >
    <div className="signUp">
      <div className="signUp__container">
        <h1 className="signUp__header">Sign-Up</h1>
        <form>
          <div className="signUp__formGroup">
            <label className="signUp__label" for="email">Full Name</label>
            <input
              className="signUp__input"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className="signUp__formGroup">
            <label className="signUp__label" for="email">Email</label>
            <input
              className="signUp__input"
              type="text"
              name="email"
              id="email"
              placeholder="user@email.com"
            />
          </div>
          <div className="signUp__formGroup">
            <label className="signUp__label" for="password">Password</label>
            <input className="signUp__input"
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </div>
        </form>
        <div className="signUp__buttonContainer">
          <button className="signUp__button" type="button">Sign-Up</button>  
        </div>
      </div>
      <div className="signUp__signIn">
          Already Registered? <Link to={`/`}>Sign-In</Link>
      </div>
    </div>
    </motion.div>
  );
};

export default SignUp;