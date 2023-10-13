import React, { useState } from 'react';
import './style.css';
import Time from './time';

let App = () => {
  return (
    <div className="time-app">
      <h1> Simple React Time App</h1>
      <div className="time">
        {' '}
        <Time />{' '}
      </div>
    </div>
  );
};

export default App;
