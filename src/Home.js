import React from 'react';
import Image from './images/weather.gif';

function Home() {
    return (<div className="text-center">
        <h2 className="font-weight-bolder">Welcome to my Weather App</h2>
        <img src={Image} alt="weather gif" />
    </div>)
}

export default Home;