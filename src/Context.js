import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PLACE":
      return {
        ...state,
        place: action.payload
      };
    case "UPDATE_INFO":
      return {
        ...state,
        information: action.payload
      };
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    information: [],
    place: "vancouver",
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  fetchData(place) {
    place = this.state.place;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=${process.env.REACT_APP_apiKey}`).then(response => {
      response
        .json()
        .then(data => {
          this.setState({
            information: data
          });
        })
        .catch(error => {
          console.log(`this is a error ${error}`);
        });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (

      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer; 