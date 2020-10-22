import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { AnimatePresence  } from "framer-motion"
import { useCookies } from 'react-cookie';
import axios from 'axios';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ComingProducts from "./components/ComingProducts";
import Welcome from "./components/Welcome";
import Iphone from "./components/Iphone";
import Watch from "./components/Watch";

function App() {
  const [isAuth, setAuth] = useState(true);
  const [shippingDates, setShippingDates] = useState({});
  const [cookies] = useCookies(['user'])

  useEffect(() => {
    axios.get("https://boalt-interview.herokuapp.com/api/shipping-dates")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
        // If CORS error manually set API data
        setShippingDates({
          iphone: "2020/02/21",
          macbook: "2020/08/04",
          watch: "2020/11/16",
        })
      })
  }, []);

  if(!cookies.user) {
    return (
      <div>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="*" render={() => <Redirect to={'/'} />} />
          </Switch>
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={ComingProducts} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/iphone" render={() => <Iphone shippingDate={shippingDates.iphone} />} />
          <Route path="/watch" render={() => <Watch shippingDate={shippingDates.watch} />} />
          <Route path="*" render={() => <Redirect to={'/welcome'} />} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
