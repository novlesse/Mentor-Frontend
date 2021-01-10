import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import Workshops from "./pages/Workshops";

import "./App.css";
import EventSignup from "./pages/EventSignup";

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
          <Route path="/login" component={Login} />
          <Route path="/registeration" component={Registration} />
          <Route path="/eventSignup" component={EventSignup} />

          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}
