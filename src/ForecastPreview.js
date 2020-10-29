import React from "react";
import WeatherIcon from "./WeatherIcon"

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return (
      <h4>
        <strong>{temperature}</strong>ºC
      </h4>
    )
  }

  return (
    <li className="list-group-item days-temp">
      <div className="row">
        <div className="col-4">
          <WeatherIcon code={props.data.weather[0].icon} />
        </div>
        <div className="col">
          {hours()}
          {temperature()}
        </div>
      </div>
    </li>
  )
}