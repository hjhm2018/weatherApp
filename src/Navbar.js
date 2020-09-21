import React from 'react';
import Home from './Home';
import Weather from './Weather';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function NavBar(){
    return(<>
        <Router>
            <div className="navBar">
                <span className="link"><Link to="/">Home</Link></span>
                <span className= "link"><Link to="/weather">Weather App</Link></span>
            </div>
            

            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/weather" component={Weather}></Route>
            </Switch>
        </Router>
    </>)
}