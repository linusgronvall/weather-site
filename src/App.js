import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Map from './components/Map';
import SearchBox from './components/SearchBox';
import TemperatureWidget from './components/TemperatureWidget';
import { WeatherContext } from './context/WeatherContext';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import NewsList from './components/NewsList';
import ForecastWidget from './components/ForecastWidget';
import useWindowDimensions from './hooks/UseWindowDimensions';
const axios = require('axios');

function App() {
  const [location, setLocation] = useState();
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setLoading(true);
    async function getData() {
      if (!location) {
        const weatherPlaceHolder = `https://weather-site-proxy-server.herokuapp.com/api/current/city?q=Stockholm`;
        const res = await axios.get(weatherPlaceHolder);
        setLocation(res.data);
        setLoading(false);
        const forecastWeatherUrl = `https://weather-site-proxy-server.herokuapp.com/api/forecast/city?q=Stockholm`;
        const forecastRes = await axios.get(forecastWeatherUrl);
        setForecast([...forecastRes.data.list]);
      }

      // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition(async (position) => {
      //     let lat = position.coords.latitude;
      //     let lon = position.coords.longitude;
      //     const currentWeatherUrl = `https://weather-site-proxy-server.herokuapp.com/api/current/coords?lat=${lat}&lon=${lon}`;
      //     const weatherRes = await axios.get(currentWeatherUrl);
      //     setLocation(weatherRes.data);
      //   });
      // } else {
      //   console.log('Geolocation not available');
      // }
    }
    getData();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        locationValue: [location, setLocation],
        forecastValue: [forecast, setForecast],
        loadingValue: [loading, setLoading],
      }}
    >
      <NavBar />
      <div
        style={{
          height: '90vh',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className='homeWrapper'
      >
        <div
          className='leftContainer'
          style={{
            display: 'flex',
            flexShrink: 0,
            flexGrow: 1,
            flexDirection: 'column',
          }}
        >
          <SearchBox />
          <div
            className='weatherContainer'
            style={{
              display: 'flex',
              width: '100%',
              flexShrink: 0,
            }}
          >
            {width > 690 ? (
              <TemperatureWidget />
            ) : (
              <div className='weatherContainerInner'>
                <TemperatureWidget />
                <Clock />
              </div>
            )}
            <ForecastWidget />
          </div>
          {loading ? (
            <div
              style={{
                height: '60vh',
                width: '100%',
                backgroundColor: 'white',
                boxShadow: '0px 0px 10px 1px #e0e0e0',
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ClipLoader color={'grey'} loading={loading} size={25} />
            </div>
          ) : (
            <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <Map />
            </Wrapper>
          )}
        </div>
        <div
          className='rightContainer'
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          {width < 690 ? null : <Clock />}
          <NewsList />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
