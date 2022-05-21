import React, { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBox = () => {
  const [input, setInput] = useState('');
  const { locationValue, loadingValue } = useContext(WeatherContext);
  const [location, setLocation] = locationValue;
  const [loading, setLoading] = loadingValue;
  const city_url = `https://weather-site-proxy-server.herokuapp.com/api/city?q=${input}`;

  const getWeatherdata = async () => {
    setLoading(true);
    setInput('');
    await fetch(city_url)
      .then((res) => res.json())
      .then((data) => setLocation(data));
    setLoading(false);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        getWeatherdata();
      }}
      className='searchContainer'
      style={{
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        boxShadow: '0px 0px 10px 1px #e0e0e0',
        borderRadius: 10,
      }}
    >
      <input
        type='text'
        value={input}
        placeholder='Sök ort'
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          padding: 10,
          fontSize: 16,
          outline: 'none',
        }}
        className='searchField'
      ></input>
      <button
        type='submit'
        style={{
          width: 55,
          height: 35,
          border: 'none',
          borderRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          cursor: 'pointer',
        }}
        className='searchButton'
      >
        <AiOutlineSearch size={18} />
      </button>
    </form>
  );
};

export default SearchBox;
