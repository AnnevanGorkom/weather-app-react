import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  function degreesToCompass(degrees) {
    let directions = [
      "North",
     "North-Northeast",
     "Northeast",
     "East-Northeast",
     "East",
     "East-Southeast",
     "Southeast",
     "South-Southeast",
      "South",
     "South-Southwest",
     "Southwest",
     "West-Southwest",
     "West",
     "West-Northwest",
     "Northwest",
     "North-Northwest",
    ];
    let value = Math.floor(degrees / 22.5 + 0.5);
   return directions[value % 16];
  }

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
            <li className="list-group-item" id="wind-direction">{degreesToCompass(props.newWindDir)}
            </li>
            <li className="list-group-item"><span id="wind-force">{Math.round(props.newWindForce)}</span> km/u
            </li>
            <li className="list-group-item"><span id="humidity">{props.newHumidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
