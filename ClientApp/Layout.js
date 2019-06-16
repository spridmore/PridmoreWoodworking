import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, HashRouter, NavLink } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import NavBar from './Components/NavBar';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HashRouter>
          <div>
            <Route exact path="/Home" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default Layout;
