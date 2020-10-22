import React from "react";
import FormattedDate from "./FormattedDate";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="card-title">{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div id="weather-description">{props.data.description}</div>
    </div>
  );
}
