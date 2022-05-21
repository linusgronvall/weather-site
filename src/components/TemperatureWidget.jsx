import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import ClipLoader from 'react-spinners/ClipLoader';
// import Comp from './Comp';

const TemperatureWidget = () => {
  const { locationValue, loadingValue } = useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [loading, setLoading] = loadingValue;

  useEffect(() => {
    const city_url = `https://weather-site-proxy-server.herokuapp.com/api/city?q=Stockholm`;
    if (!location) {
      fetch(city_url)
        .then((res) => res.json())
        .then((data) => setLocation(data));
    }
    setLoading(false);
  }, []);

  return (
    <div
      className='temperatureContainer'
      style={{
        background: 'white',
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ClipLoader color={'grey'} loading={loading} size={25} />
        </div>
      ) : (
        <div style={{ width: '100%', backgroundColor: 'yellow' }}>
          <h2>
            {location?.name}, {location?.sys?.country}
          </h2>
          <div className='temperatureContainerInner'>
            <div>
              <p style={{ fontSize: 10 }}>
                Temperatur: {location?.main?.temp} °C
              </p>
              <p> Vind: {location?.wind?.speed} m/s</p>
            </div>
            <div style={{ backgroundColor: 'red' }}>
              <img
                src={`http://openweathermap.org/img/wn/${location?.weather[0]?.icon}@2x.png`}
                style={{ width: 45, height: 45 }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemperatureWidget;
