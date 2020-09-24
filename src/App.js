import React from "react";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Today />
      <Forecast />
    </div>
  );
}

export default App;
