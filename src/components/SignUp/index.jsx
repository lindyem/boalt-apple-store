import React from "react";
import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    localStorage.setItem(email, password);
    history.push('/signIn');
  } 

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
        <form onSubmit={handleFormSubmit}>
          <div className="signUp__formGroup">
            <label className="signUp__label" htmlFor="name">Full Name</label>
            <input
              className="signUp__input"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
            />
          </div>
          <div className="signUp__formGroup">
            <label className="signUp__label" htmlFor="email">Email</label>
            <input
              className="signUp__input"
              type="text"
              name="email"
              id="email"
              placeholder="user@email.com"
            />
          </div>
          <div className="signUp__formGroup">
            <label className="signUp__label" htmlFor="password">Password</label>
            <input className="signUp__input"
              type="password"
              name="password"
              id="password"
              placeholder="**********"
            />
          </div>
          <div className="signUp__buttonContainer">
            <button className="signUp__button" type="submit">Sign-Up</button>  
          </div>
        </form>
      </div>
      <div className="signUp__signIn">
          Already Registered? <Link to={`/`}>Sign-In</Link>
      </div>
    </div>
    </motion.div>
  );
};

export default SignUp;