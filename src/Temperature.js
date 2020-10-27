import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return Math.round((props.data.temp * 1.8) + 32);
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature">
        <div className="today-weather">
          <WeatherIcon code={props.data.icon} alt={props.data.description}/>
          <span className="temp">{Math.round(props.data.temp)}</span>
          <p className="degree-type">
            ºC | <a href="/" onClick={showFahrenheit}>ºF</a>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Temperature">
        <div className="today-weather">
          <WeatherIcon code={props.data.icon} alt={props.data.description}/>
          <span className="temp">{fahrenheit()}</span>
          <p className="degree-type">
            <a href="/" onClick={showCelsius}>ºC</a> | ºF
          </p>
        </div>
      </div>
    );
  }
}
