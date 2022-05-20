import React, { useState } from 'react';

const Test = () => {
  const [location, setLocation] = useState();
  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: Infinity,
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) =>
      setLocation(pos.coords.latitude)
    );
  }
  return <div>{location ? location : null}</div>;
};

export default Test;
