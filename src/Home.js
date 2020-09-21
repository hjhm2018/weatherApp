import React from 'react';
import Image from './images/weather.gif';

function Home(){
    return(<div className="containerHome">
                <p>Welcome to my Weather App</p>
                <img src={Image} alt="weather gif"/>
            </div>)
}

export default Home;