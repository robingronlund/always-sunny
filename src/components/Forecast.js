import React from "react";
import "../styles/Forecast.scss";

const ForeCast = (props) => {
  const { weather } = props;

  const temperatures = weather.map((w) => parseInt(w.temp, 10));
  const sortedArray = temperatures
    .map((temperature) => temperature)
    .sort((a, b) => a - b);

  const minTemp = temperatures.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
  });

  const maxTemp = temperatures.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  });

  const avarage = () => {
    const sum = sortedArray.reduce((acc, curr) => (curr += acc));
    const avarage = sum / sortedArray.length;
    return avarage;
  };

  const median = () => {
    const highMiddle = Math.floor((sortedArray.length - 1) / 2);
    const lowMiddle = Math.ceil((sortedArray.length - 1) / 2);
    const median = (sortedArray[lowMiddle] + sortedArray[highMiddle]) / 2;
    return median;
  };

  return (
    <div className="forecast-wrapper">
      <div className="forecast-min-max">
        <p>Max - {maxTemp}&#176;</p>
        <p>Min - {minTemp}&#176;</p>
      </div>
      <div className="forecast-medium-median">
        <p>Avarage - {avarage()}&#176;</p>
        <p>Median - {median()}&#176;</p>
      </div>
    </div>
  );
};

export default ForeCast;
