import React from 'react';

const ForecastWidget = () => {
  return (
    <div
      className='forecastContainer'
      style={{
        background: 'white',
        flexShrink: 0,
        flexGrow: 1,
        height: 150,
        padding: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      <h2>5-Dygnsprognos </h2>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'red',
          height: '100%',
        }}
      >
        <div className='forecastDayContainer'>Dag 1</div>
        <div className='forecastDayContainer'>Dag 1</div>
        <div className='forecastDayContainer'>Dag 1</div>
        <div className='forecastDayContainer'>Dag 1</div>
        <div className='forecastDayContainer'>Dag 1</div>
      </div>
    </div>
  );
};

export default ForecastWidget;
