import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, HashRouter, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <NavLink className="NavLink" to="/Home">Samples</NavLink>
                        <NavLink className="NavLink" to="/Contact">Contact</NavLink>
                        <NavLink className="NavLink" to="/About">About</NavLink>


                    </div>
                    {/* <Route exact path="/" component={Home} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route path="/About" component={About} /> */}
                </HashRouter>

            </div>
        );
    }
}

export default NavBar;