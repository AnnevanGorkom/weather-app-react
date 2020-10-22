import React from "react";

export default function FormattedDate(props) {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = days[props.date.getDay()];
  let hours = addZero(props.date.getHours());
  let minutes = addZero(props.date.getMinutes());

  function addZero(time) {
    if (time < 10) {
      time = "0" + time;
    }
    return time;
  }

  return (
    <p className="card-subtitle" id="date">
      {day}, {hours}:{minutes}
    </p>);
}