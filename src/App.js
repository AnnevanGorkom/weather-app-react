import React from "react";
import Today from "./Today";
import "./App.css";

export default function App() {
    let city = "Haarlem";
    return (
      <div className="container">
        <div className="App">
         <div className="row">
            <div className="col">
              <Today defaultCity={city}/>
            </div>
          </div>
        </div>
        <p className="coded-by">
          <a
            href="https://github.com/AnnevanGorkom/weather-app"
            target="_blank"
           rel="noopener noreferrer"
          >
          Open-source code
          </a>{" "}by Anne van Gorkom
        </p>
      </div>
    );
}
