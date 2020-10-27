import React from "react";
import WeatherIcon from "./WeatherIcon"
import "./ForecastPreview.css"

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return (
    <p>{hours}:00</p>
    );
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
    <div className="ForecastPreview">
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
    </div>
  )
}