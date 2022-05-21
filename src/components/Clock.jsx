import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, []);
  return (
    <div
      className='clockContainer'
      style={{
        background: 'white',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 15,
        boxShadow: '0px 0px 10px 1px #e0e0e0',
      }}
    >
      <div className='clockInnerContainer'>
        <p style={{ fontSize: 25, marginRight: 5 }}>
          {dateState.toLocaleDateString('se-SE', {
            weekday: 'long',
          })}
          ,
        </p>
        <p>
          {dateState.toLocaleDateString('se-SE', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>

      <p>
        {dateState.toLocaleString('se-SE', {
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
