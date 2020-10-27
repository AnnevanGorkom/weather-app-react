import React, { useState } from "react";
import axios from "axios";
import * as Spinners from 'css-spinners-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Header from "./Header";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Today.css";

export default function Today(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      temp: response.data.main.temp,
      windDirection: response.data.wind.deg,
      windForce: response.data.wind.speed,
      humidity: response.data.main.humidity
    });
  }
  
  
  function search() {
    const apiKey="94504fb22392e5a384860fde5e24eca5";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <form id="search-city" className="ml-3 mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-group col-9">
                <input
                  type="text"
                  placeholder="Find another city"
                  className="form-control search-input"
                  id="new-city-input"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button type="submit" className="btn btn-primary search-button">
                  <i className="fas fa-search search-icon"></i>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
          
              <div className="col">
                <button className="btn btn-primary" id="current-city">
                  Current city
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="Today">
        <div className="row">
          <div className="col-8">
            <Header data={weatherData} />
            <Temperature data={weatherData} />
            <WeatherInfo data={weatherData} />
            </div>
            <Forecast className="col" city={weatherData.city}/>
            </div>
         </div>
      </div>
    );
    } else {
      search();
      return (
      <div className="loader">
        <Spinners.Spinner />
        <h3>"Loading..."</h3>
      </div>);
  }
}
