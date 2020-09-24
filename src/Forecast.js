import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <h3>Forecast</h3>
      <ul className="list-group list-group-flush" id="forecast"></ul>
    </div>
  );
}
