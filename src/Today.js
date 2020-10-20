import React, { useState } from "react";
import axios from "axios";
import * as Spinners from 'css-spinners-react';

import Header from "./Header";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
import "./Today.css";

export default function Today(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      windDirection: response.data.wind.deg,
      windForce: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }
  
  if (weatherData.ready) {
    return (
     <div className="Today">
        <div className="row">
          <div className="col">
            <Header newCity={weatherData.city} newDescription={weatherData.description} />
            <Temperature newTemp={weatherData.temp}/>
            <WeatherInfo newWindDir={weatherData.windDirection} newWindForce={weatherData.windForce} newHumidity={weatherData.humidity}/>
          </div>
        </div>
      </div>
  );
  } else {
    const apiKey="94504fb22392e5a384860fde5e24eca5";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return (
    <div className="loader">
      <Spinners.Spinner />
      <h3>"Loading..."</h3>
    </div>);
  }
}
