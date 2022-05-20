import React, { useState, useEffect } from 'react';
import Clock from './Clock';

const NavBar = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '7vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingLeft: 50,
      }}
    >
      <h1>Weather Site</h1>
    </div>
  );
};

export default NavBar;
