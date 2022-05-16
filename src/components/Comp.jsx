import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import ClipLoader from 'react-spinners/ClipLoader';

const Comp = () => {
  const { locationValue, loadingValue } = useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [loading, setLoading] = loadingValue;
  return (
    <div>
      <div>
        <p> Temperatur: {location?.main?.temp} °C</p>
        <p> Vind: {location?.wind?.speed} m/s</p>
        <img
          src={`http://openweathermap.org/img/wn/${location?.weather[0]?.icon}@2x.png`}
          style={{ width: 60, height: 60 }}
        />
      </div>
    </div>
  );
};

export default Comp;
