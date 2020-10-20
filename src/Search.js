import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-city" className="ml-3 mb-3">
        <div className="row">
          <div className="input-group col-9">
            <input
              type="text"
              placeholder="Find another city"
              className="form-control search-input"
              id="new-city-input"
              autoFocus="on"
            />
            <button type="submit" className="btn btn-primary search-button">
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
