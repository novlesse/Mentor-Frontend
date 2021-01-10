import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Workshops from "./components/Workshops";

import "./App.css";

export default function App(props) {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}
