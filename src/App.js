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

function App() {
  const [location, setLocation] = useState();
  const [loading, setLoading] = useState(true);

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

  // const render = (status) => {
  //   if (status === Status.FAILURE) return <ErrorComponent />;
  //   return <Spinner />;
  // };
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
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
        <div>
          <SearchBox />

          <TemperatureWidget />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          {/* <Wrapper
            apiKey={'AIzaSyBkr0g2XCQrYTmcJxNbE0rsykanZdvohNQ'}
            // render={render}
          >
            <Map />
          </Wrapper> */}
          <Clock />
          <NewsList />
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
