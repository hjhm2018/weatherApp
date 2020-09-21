import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "./Context";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
// import Weather from './Weather';
import NavBar from './Navbar';

function App() {
  return (
    <Provider>
      <Header/>
      <NavBar/>
      <Footer/>
    </Provider>
  );
}

export default App;
