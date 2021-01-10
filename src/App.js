import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Workshops from "./pages/Workshops";

import GlobalStyle from './globalStyles';

export default function App(props) {
  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}
