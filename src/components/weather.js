import React from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key">Location:
                    <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value"> {this.props.temperature}</span>
                    </p>
                }
                {this.props.tempHigh && <p className="weather__key">Temp High:
                    <span className="weather__value"> {this.props.tempHigh} ° F</span>
                </p>
                }
                {this.props.tempLow && <p className="weather__key">Temp Low:
                    <span className="weather__value"> {this.props.tempLow} ° F</span>
                </p>
                }
                {this.props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> {this.props.humidity} %</span>
                </p>
                }
                {this.props.windSpeed && <p className="weather__key">Wind Speed:
                    <span className="weather__value"> {this.props.tempHigh} mph</span>
                </p>
                }
                {this.props.description && <p className="weather__key">Description:
                    <span className="weather__value"> {this.props.description}</span>
                </p>
                }
                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                }
                
            </div>
        )
    }
}

// const Weather = (props) => {
//     return(
//         <div>
//            {props.temperature && <p>Temperature: {props.temperature} ° F</p>}
//            {props.tempHigh && <p>The high today is: {props.tempHigh} ° F</p>}
//            {props.tempLow && <p>The low today is: {props.tempLow} ° F</p>}
//            {props.humidity && <p>Humidity: {props.humidity} %</p>}
//            {props.windSpeed && <p>Wind Speed: {props.windSpeed} mph</p>}
//            {props.description && <p>Conditions: {props.description}</p>}
//            {props.error && <p>{props.error}</p>}
//         </div>
//     )
// }

export default Weather;