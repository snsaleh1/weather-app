import React from 'react';
import Form from './components/form';
import Titles from './components/titles';
import Weather from './components/weather';

class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    //e-variable passing to function / target-where it's coming from/ element-just remember it/ city.value - value of input field
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const response = await api_call.json();
    console.log(response);
  }
  render() {
    return(
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather />
      </div>
    )
  }
}

export default App;