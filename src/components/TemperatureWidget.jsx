import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import ClipLoader from 'react-spinners/ClipLoader';
import Comp from './Comp';

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
      style={{
        background: 'white',
        width: 250,
        height: 150,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
        marginRight: 20,
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
        <div>
          <div>
            <h2>
              {location?.name}, {location?.sys?.country}
            </h2>
            <Comp />
          </div>
          {/* ) : (
            <h4>404 Error. Location not found</h4>
          )} */}
        </div>
      )}
    </div>
  );
};

export default TemperatureWidget;
