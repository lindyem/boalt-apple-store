import React from "react";
import { motion } from "framer-motion"
import { Link, useHistory } from "react-router-dom";
import { useCookies } from 'react-cookie';

const SignIn = (props) => {
  const history = useHistory();
  const [cookies, setCookie] = useCookies(['user'])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if(localStorage.getItem(email) === password) {
      setCookie('user', true, { path: '/' });
      history.push('/');
    }
  }

  return (
    <motion.div
      key="signIn"
      initial={{ x: '-70vw'}}
      animate={{ x: 0,}}
      exit={{ x: '-70vw'}}
      transition={{ duration: '0.1' }}
    >
      <div className="signIn">
        <div className="signIn__container">
          <h1 className="signIn__header">Sign-In</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="signIn__formGroup">
              <label className="signIn__label" for="email">Email</label>
              <input
                className="signIn__input"
                type="text"
                name="email"
                id="email"
                placeholder="user@email.com"
              />
            </div>
            <div className="signIn__formGroup">
              <label className="signIn__label" for="password">Password</label>
              <input className="signIn__input"
                type="password"
                name="password"
                id="password"
                placeholder="**********"
              />
            </div>
              <div className="signIn__buttonContainer">
              <button className="signIn__button" type="submit">Sign-In</button>  
            </div>
          </form>
        </div>
        <div className="signIn__signUp">
            Not Registered?   <Link to={`/signUp`}>Sign-Up</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;