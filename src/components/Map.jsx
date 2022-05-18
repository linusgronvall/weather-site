import React, { useRef, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import ClipLoader from 'react-spinners/ClipLoader';

function Map() {
  const ref = useRef();
  const { locationValue, loadingValue } = useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [loading, setLoading] = loadingValue;
  console.log(location);

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: { lat: location?.coord?.lat, lng: location?.coord?.lon },
      zoom: 12,
    });
  });

  return (
    <div
      ref={ref}
      style={{
        height: '60vh',
        width: '100%',
        boxShadow: '0px 0px 10px 1px #e0e0e0',
        borderRadius: 10,
        marginTop: 20,
      }}
      id='map'
    />
  );
}

export default Map;
