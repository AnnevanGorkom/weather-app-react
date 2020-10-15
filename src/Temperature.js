import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="today-weather">
        <i className="today-icon fas fa-cloud"></i>
        <h2>19</h2>
        <p className="degree-type">
          {/* <a href="#" id="celcius-link" className="active"> */}
          ºC
          {/* </a>{" "}
          |
          <a href="#" id="fahrenheit-link">
            ºF
          </a> */}
        </p>
      </div>
    </div>
  );
}
