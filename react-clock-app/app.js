import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import './style.css';
import Time from './time'




/*let Time = () => {
    //time

    let d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let time = `${hour} : ${minutes} : ${seconds}`;

    let [currentTime, setCurrentTime] = useState(time);

    //updating the time

    let timeUpdate = () => {

        let d = new Date();
        let hour = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();


        let time = `${hour} : ${minutes} : ${seconds}`;

        setCurrentTime(time);

    }

    setInterval(timeUpdate, 1000);

    return <div> 
  {currentTime}
  </div>;
};*/











let Main = () => {
  return (
    <div className="time-app">
      <h1> Simple React Time App</h1>
      <div className="time">
        
        <Time />
      </div>
    </div>
  );
};


ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
