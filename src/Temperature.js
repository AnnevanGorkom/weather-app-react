import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Temperature.css";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div className="today-weather">
        <WeatherIcon code={props.data.icon} alt={props.data.description}/>
        <span className="temp">{Math.round(props.data.temp)}</span>
        <p className="degree-type">
          {/* <a href="#" id="celcius-link" className="active"> */}
          ºC
          {/* </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            ºF
          </a> */}
        </p>
      </div>
    </div>
  );
}
