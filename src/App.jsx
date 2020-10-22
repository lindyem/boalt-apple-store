import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import axios from 'axios';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ComingProducts from "./components/ComingProducts";
import Welcome from "./components/Welcome";
import Iphone from "./components/Iphone";
import { AnimatePresence  } from "framer-motion"

function App() {
  const [isAuth, setAuth] = useState(true);
  const [shippingDates, setShippingDates] = useState({});

  useEffect(() => {
    axios.get("http://boalt-interview.herokuapp.com/api/shipping-dates")
      .then((response) => {
        console.log(response)
      })
  });

  return (
    <div>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/comingProducts" component={ComingProducts} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/iphone" component={Iphone} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
