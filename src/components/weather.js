import React from 'react';

const Weather = (props) => {
    return(
        <div>
           {props.country && props.city && <p>Location: The great city of {props.city}, {props.country}</p>} 
           {props.temperature && <p>Temperature: {props.temperature} ° F</p>}
           {props.tempHigh && <p>The high today is: {props.tempHigh} ° F</p>}
           {props.tempLow && <p>The low today is: {props.tempLow} ° F</p>}
           {props.humidity && <p>Humidity: {props.humidity} %</p>}
           {props.windSpeed && <p>Wind Speed: {props.windSpeed} mph</p>}
           {props.description && <p>Conditions: {props.description}</p>}
           {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;