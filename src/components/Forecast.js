import React, { useState } from 'react'
import '../styles/Forecast.scss'

const initialState = {
  minTemp: 0,
  maxTemp: 0,
  medianTemp: 0,
  mediumTemp: 0,
}

const forecast = [
  {
    temp: 20
  },
  {
    temp: 16
  },
  {
    temp: 12
  },
  {
    temp: 23
  },
]

const ForeCast = () => {
  const [state, setState] = useState(initialState)
  const minTemp = forecast.reduce((acc, curr) => {
    return (curr.temp < acc.temp ? curr : acc);
  })

  const maxTemp = forecast.reduce((acc, curr) => {
    return (curr.temp > acc.temp ? curr : acc);
  })

  const avarage = () => {
    const arr = forecast.map((forecast) => forecast.temp).sort()
    const sum = arr.reduce((acc, curr) => curr += acc)
    return sum / arr.length
  }

  const median = () => {
    const arr = forecast.map((forecast) => forecast.temp).sort((a, b) => a - b)
    const highMiddle = Math.floor((arr.length -1) / 2)
    const lowMiddle = Math.ceil((arr.length -1) / 2)
    return (arr[lowMiddle] + arr[highMiddle]) / 2
  }

  return (
    <div className="forecast-wrapper">
      <div className="forecast-min-max">
        <p>Max - {maxTemp.temp}&#176;</p>
        <p>Min - {minTemp.temp}&#176;</p>
      </div>
      <div className="forecast-medium-median">
        <p>Avarage - {avarage()}&#176;</p>
        <p>Median - {median()}&#176;</p>
      </div>
    </div>
  )
}


export default ForeCast
