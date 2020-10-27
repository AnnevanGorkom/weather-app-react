import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form id="search-city" className="ml-3 mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group col-9">
            <input
              type="text"
              placeholder="Find another city"
              className="form-control search-input"
              id="new-city-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              <FontAwesomeIcon icon="coffee" />
              <i className="fas fa-search search-icon"></i>
            </button>
          </div>

          <div className="col">
            <button className="btn btn-primary" id="current-city">
              Current city
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
