import React, { useState } from "react";
import axios from "axios";

import ForecastPreview from "./ForecastPreview";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastInfo, setForecastInfo] = useState(null);


  function handleForecastResponse(response) {
    setForecastInfo(response.data);
    setLoaded(true);
  }

  
  if (loaded && props.city === forecastInfo.city.name) {
    return (
      <div className="Forecast">
        <h3>Forecast</h3>
        <ul className="list-group list-group-flush" id="forecast">
          {forecastInfo.list.slice(0, 5).map(function (forecastItem) {
            return <ForecastPreview data={forecastItem} />
          })}
        </ul>
      </div>
    );
  } else {
    const apiKey="94504fb22392e5a384860fde5e24eca5";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleForecastResponse);
    
    return (
      <div className="Forecast">
        <h3>Forecast</h3>
      </div>
    );
  }
}

