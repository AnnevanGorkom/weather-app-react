import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col weather-info weather-facts">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Wind direction:</li>
            <li className="list-group-item">Wind force:</li>
            <li className="list-group-item">Humidity:</li>
          </ul>
        </div>
        <div className="col weather-info weather-vars">
          <ul className="list-group list-group-flush">
            <li className="list-group-item" id="wind-direction">{props.newWindDir}
            </li>
            <li className="list-group-item"><span id="wind-force">{props.newWindForce}</span> km/u
            </li>
            <li className="list-group-item"><span id="humidity">{props.newHumidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
