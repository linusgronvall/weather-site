import React, { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import ClipLoader from 'react-spinners/ClipLoader';

const Comp = () => {
  const { locationValue, loadingValue } = useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [loading, setLoading] = loadingValue;
  return <h1></h1>;
};

export default Comp;
