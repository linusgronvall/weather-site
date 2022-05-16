import React, { useRef, useEffect } from 'react';

function Map(center, zoom) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center: { lat: 55, lng: 13 },
      zoom: 8,
    });
  });

  return (
    <div
      ref={ref}
      style={{
        height: '30vh',
        width: '30vh',
        boxShadow: '0px 0px 10px 1px #e0e0e0',
        borderRadius: 10,
      }}
      id='map'
    />
  );
}

export default Map;
