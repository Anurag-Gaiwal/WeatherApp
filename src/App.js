import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/Anurag-vesit/WeatherApp">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a  href="https://github.com/Anurag-vesit">
          Anurag Gaiwal
        </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
