import React, { useState, useEffect } from 'react';

import Header from './Header'
import '../styles/App.scss';
import ForeCast from './Forecast';

function App() {
  const [foreCast, setForeCast] = useState()
  const [error, setError] = useState()
  const cityName = 'Gothenburg'

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/forecast/hourly?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       let weather = data
  //       console.log(weather)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       })
  // }, [])

  return (
    <div className="page-container">
      <Header></Header>
      <label>Calculated forecast from 4 days of weather data</label>
      <ForeCast></ForeCast>
    </div>
  );
}

export default App;
