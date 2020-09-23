import React from 'react';
import Home from './Home';
import Weather from './Weather';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default function NavBar() {
    return (<>
        <Router>
            <div className="text-center m-2">
                <span><Link className="btn btn-primary m-1" to="/">Home</Link></span>
                <span><Link className="btn btn-primary m-1" to="/weather">Weather App</Link></span>
            </div>


            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/weather" component={Weather}></Route>
            </Switch>
        </Router>
    </>)
}