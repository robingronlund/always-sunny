import React, { useState, useEffect } from "react";

import Header from "./Header";
import "../styles/App.scss";
import ForeCast from "./Forecast";
import EmptyState from "./EmptyState";

function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchHistoricalData();
  }, []);

  const fetchHistoricalData = () => {
    let history = 4;
    for (let i = 0; i < 4; i++) {
      let date = new Date(Date.now() - history * 24 * 3600 * 1000).getTime();

      const unixTime = Math.floor(date / 1000.0);
      const url = `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=57.7&lon=11.9&dt=${unixTime}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          setState((state) => [...state, data.current]);
        })
        .catch((err) => {
          console.log(err);
        });

      history--;
    }
  };
  return (
    <div className="page-container">
      <Header></Header>
      <label>Calculated temperature from 4 days of weather data</label>
      {state.length > 0 ? (
        <ForeCast weather={state}></ForeCast>
      ) : (
        <EmptyState></EmptyState>
      )}
    </div>
  );
}

export default App;
