import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="card-title">Haarlem</h1>
      <p className="card-subtitle" id="date">
        Thursday, 15:55
      </p>
      <div id="weather-description">cloudy</div>
    </div>
  );
}
