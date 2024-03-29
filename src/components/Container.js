import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./Main";
import Menu from "./Menu";
import Order from "./Order";
import Register from "./Register";
import About from "./About";

function Container() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/menu" component={ Menu } />
          <Route path="/order" component={ Register } />
          <Route path="/About" component={ About } />
        </Switch>
    </div>
  );
}


export default Container;