import React from "react";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <Search />
        <Today />
        <Forecast />
      </div>
      <p className="coded-by">
        <a
          href="https://github.com/AnnevanGorkom/weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Anne van Gorkom
      </p>
    </div>
  );
}

export default App;
