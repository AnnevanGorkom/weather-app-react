import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
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
            <li className="list-group-item" id="wind-direction">
              South-West
            </li>
            <li className="list-group-item">
              <span id="wind-force">10</span> km/u
            </li>
            <li className="list-group-item">
              <span id="humidity"></span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
