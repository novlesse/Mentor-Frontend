import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Logout from "./components/Logout";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Registration from "./pages/Registration";
import Workshops from "./pages/Workshops";
import Business from './pages/Business';

<<<<<<< HEAD
import GlobalStyle from './globalStyles';
=======
import "./App.css";
import EventSignup from "./pages/EventSignup";
>>>>>>> fa0740479c13f261b42628a117888ef91e0e2338

export default function App(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser();
  }, []);

  return (
    <div>
<<<<<<< HEAD
      <NavBar />
      <GlobalStyle />
=======
      <NavBar user={user} />
>>>>>>> fa0740479c13f261b42628a117888ef91e0e2338
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/workshops" component={Workshops} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/registeration" component={Registration} />
          <Route path="/eventSignup" component={EventSignup} />

          <Route path="/not-found" component={NotFound} />
          <Route path='/business' component={Business}/>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}
