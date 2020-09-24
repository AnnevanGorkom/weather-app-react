import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`It is ${response.data.main.temp}ºC in ${response.data.name}`);
  }

  let unit = "metric";
  let apiKey = "94504fb22392e5a384860fde5e24eca5";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=${unit}&appid=${apiKey}`;
  axios.get(api).then(handleResponse);

  return <h2>The weather in {props.city}</h2>;
}
