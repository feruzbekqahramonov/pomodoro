import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const [displayMassage, setDisplayMassage] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval)
      if(seconds === 0) {
        if(minutes !== 0) {
          setSeconds(59)
          setMinutes(minutes - 1)
        } else {

        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000) 
  }, [seconds]);
  const timeMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timeSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return (
    <div className="App">
      <div className="pomodoro">
        <div className="message">
          {displayMassage && <div>Break time! New session starts in:</div>}
        </div>
        <div className="timer">
          {timeMinutes}:{timeSeconds}
        </div>
      </div>
    </div>
  );
}

export default App;
