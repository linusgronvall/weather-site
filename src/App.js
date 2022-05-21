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

function App() {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const long_lat_url = `https://weather-site-proxy-server.herokuapp.com/api/coords?lat=${lat}&lon=${lon}`;
        fetch(long_lat_url)
          .then((res) => res.json())
          .then((data) => setLocation(data));
      });
    } else {
      console.log('Geolocation not available');
    }
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        locationValue: [location, setLocation],
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
