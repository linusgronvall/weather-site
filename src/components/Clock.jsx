import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, []);
  return (
    <div
      style={{
        background: 'white',
        width: 500,
        height: 80,
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}
      >
        <p style={{ fontSize: 25, marginRight: 5 }}>
          {dateState.toLocaleDateString('en-GB', {
            weekday: 'long',
          })}
          ,
        </p>
        <p>
          {dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <p>
        {dateState.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: '2-digit',
          hour12: false,
        })}
      </p>
    </div>
  );
};

export default Clock;
