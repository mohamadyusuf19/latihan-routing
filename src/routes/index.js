import React from "react";
import Home from "../container/home/Home";
import Contact from "../container/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default Routes;
