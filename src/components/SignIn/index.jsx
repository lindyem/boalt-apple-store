import React, {useState} from "react";
import { motion } from "framer-motion"
import { Link, useHistory, Redirect } from "react-router-dom";

const SignIn = (props) => {
  const history = useHistory();
  const [redirect, setRedirect] = useState('');
  if(redirect) {
    return <Redirect to={redirect} />
  }
  return (
    <motion.div
      key="1"
      initial={{ x: '-70vw'}}
      animate={{ x: 0,}}
     
      transition={{ duration: 1 }}
    >
      <div className="signIn">
        <div className="signIn__container">
          <h1 className="signIn__header">Sign-In</h1>
          <form>
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
          </form>
          <div className="signIn__buttonContainer">
            <button className="signIn__button" type="button"> <Link to={`/comingProducts`}>Sign-In</Link></button>  
          </div>
        </div>
        <div className="signIn__signUp">
            Not Registered?   <Link to={`/signUp`}>Sign-Up</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default SignIn;