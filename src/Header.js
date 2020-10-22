import React from "react";
import FormattedDate from "./FormattedDate";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <h1 className="card-title">{props.newCity}</h1>
      <FormattedDate date={props.newDate} />
      <div id="weather-description">{props.newDescription}</div>
    </div>
  );
}
