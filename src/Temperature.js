import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="today-weather">
        <span className="temp">19</span>
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
