import React from "react";
import Header from "./Header";
import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
import "./Today.css";

export default function Today() {
  return (
    <div className="Today">
      <div className="row">
        <div className="col">
          <Header />
          <Temperature />
          <WeatherInfo />
        </div>
      </div>
    </div>
  );
}
