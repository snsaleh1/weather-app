import React from 'react';
import Form from './components/form';
import Titles from './components/titles';
import Weather from './components/weather';

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    windSpeed: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    //e-variable passing to function / target-where it's coming from/ element-just remember it/ city.value - value of input field
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`);
    const response = await api_call.json();
    this.setState({
      temperature: Math.trunc((response.main.temp - 273.15)*(1.8)+32),
      tempLow: Math.trunc((response.main.temp_min - 273.15)*(1.8)+32),
      tempHigh: Math.trunc((response.main.temp_max - 273.15)*(1.8)+32),
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      windSpeed: response.wind.speed,
      description: response.weather[0].description,
      error: ""
    })
    console.log(response, this.state.windSpeed);
  }
  render() {
    return(
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form loadWeather={this.getWeather} />
                  <Weather  
                    temperature={this.state.temperature}
                    tempHigh={this.state.tempHigh}
                    tempLow={this.state.tempLow}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    windSpeed={this.state.windSpeed}
                    description={this.state.description}
                    error={this.state.error} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;