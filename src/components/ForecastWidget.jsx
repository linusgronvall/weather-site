import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';

const ForecastWidget = () => {
  const { locationValue, forecastValue, loadingValue } =
    useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [forecast, setForecast] = forecastValue;
  const [loading, setLoading] = loadingValue;
  let forecastArray = [];
  function getEveryNth(arr, nth) {
    for (let i = 4; i < arr.length; i += nth) {
      forecastArray = [...forecastArray, arr[i]];
    }
  }

  getEveryNth(forecast, 8);

  function formatDate(unix_timestamp) {
    return new Date(unix_timestamp);
  }

  return (
    <div
      className='forecastContainer'
      style={{
        background: 'white',
        flexShrink: 0,
        flexGrow: 1,
        height: 150,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      <h2>5-Dygnsprognos </h2>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        {console.log(forecastArray)}
        {forecastArray?.map((day) => {
          return (
            <div key={day?.dt} className='forecastDayContainer'>
              <p>{console.log(formatDate(day?.dt))}</p>
              <p>{day?.main?.temp}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastWidget;
