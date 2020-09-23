import React, { useState } from 'react';

import { Consumer } from "./Context";

function Weather() {

    // I replaced the state for this

    const [place, setPlace] = useState("");

    const setNewPlace = e => {
        setPlace(e.target.value);
    }

    const onClick = (dispatch) => {

        const newPlace = place;

        dispatch({ type: "UPDATE_PLACE", payload: newPlace });

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${newPlace}&units=metric&APPID=${process.env.REACT_APP_apiKey}`).then(response => {
            response
                .json()
                .then(data => {
                    dispatch({ type: "UPDATE_INFO", payload: data });
                })
                .catch(error => {
                    console.log(`this is a error ${error}`);
                });
        });
    };

    return (<>
        <Consumer>
            {value => {
                const { dispatch } = value;

                return (
                    <div className="col-md-4 mx-auto rounded mt-2 text-center border border-dark">
                        <p>
                            <input className="rounded text-center" type="text" value={place} placeholder="Enter city name" name="place" onChange={setNewPlace} />
                            <button className="btn btn-success m-2" onClick={onClick.bind(this, dispatch)}>Search</button>
                        </p>

                        <p><span role="img" aria-label="City emoji">&#127750;</span> <b>City:</b> {value.information.name}</p>

                        {value.information.main ?
                            <div>
                                <p><span role="img">&#127777;</span> <b>Temperature:</b> {value.information.main.temp} ºC</p>
                                <p><span role="img">&#127777;</span> <b>Feels like:</b> {value.information.main.feels_like} ºC</p>
                                <p><span role="img">&#127777;</span> <b>Min. Temp:</b> {value.information.main.temp_min} ºC</p>
                                <p><span role="img">&#127777;</span> <b>Max. Temp:</b> {value.information.main.temp_max} ºC</p>
                            </div> : ""}
                    </div>
                )
            }}
        </Consumer>
    </>
    )
}


export default Weather;