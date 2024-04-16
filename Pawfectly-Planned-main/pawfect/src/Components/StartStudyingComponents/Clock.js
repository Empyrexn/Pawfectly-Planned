import React from 'react';
import { useTime } from 'react-timer-hook';

function MyTime() {
  const {
    seconds,
    minutes,
    hours,
    ampm,
  } = useTime({ format: '12-hour'});

  // Add leading zero if minutes is less than 10
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return (
    <div style={{textAlign: 'left'}}>
      <h4>Timer </h4>
      <div style={{fontSize: '70px', fontWeight:"bold"}}>
        <span>{hours}</span>:<span>{formattedMinutes}</span><span>{ampm}</span>
      </div>
    </div>
  );
}

export default function Clock() {
  return (
    <div>
      <MyTime />
    </div>
  );
}
