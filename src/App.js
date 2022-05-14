import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const city_url = `https://weather-site-proxy-server.herokuapp.com/api/city?q=${input}`;
  const city_url2 = `http://localhost:5000/api/city?q=${input}`;

  const getWeatherdata = () => {
    fetch(city_url2)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .then(setLoading(false));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      const long_lat_url = `https://weather-site-proxy-server.herokuapp.com/api/coords?lat=${lat}&lon=${lon}`;
      const long_lat_url2 = `http://localhost:5000/api/coords?lat=${lat}&lon=${lon}`;
      fetch(long_lat_url2)
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .then(setLoading(false));
    });
  }, []);

  if (loading) {
    return <div className='App'>Loading...</div>;
  } else {
    return (
      <div className='App'>
        Weather site
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            getWeatherdata();
          }}
        >
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <input type='submit' value='Submit'></input>
        </form>
        {/* <button onClick={() => getWeatherdata()}>click</button> */}
        <div>
          {/* {weatherData ? console.log(weatherData) : null} */}
          <h1>{weatherData?.name}</h1>
          <h1>Temperatur: {weatherData?.main?.temp} °C</h1>
        </div>
      </div>
    );
  }
}

export default App;
