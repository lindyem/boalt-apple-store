import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ComingProducts from "./components/ComingProducts";
import Welcome from "./components/Welcome";
import Iphone from "./components/Iphone";
import { AnimatePresence  } from "framer-motion"

function App() {
  const [isAuth, setAuth] = useState(true);

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
