import "./styles.css";
import React, { useState } from "react";

const TimerButtons = ({ text, func }) => {
  return <button onClick={func}>{text}</button>;
};

export default function Task1() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const startTimer = () => {
    if (!timer) {
      const tmpTimer = setInterval(() => {
        setTime((val) => val + 1);
      }, 1000);
      setTimer(tmpTimer);
    }
  };
  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      setTimer(null);
    }
  };
  const clear = () => {
    stopTimer();
    setTime(0);
  };
  return (
    <div className="App">
      <p>{time}</p>
      <TimerButtons text="Start" func={startTimer} />
      <TimerButtons text="Stop" func={stopTimer} />
      <TimerButtons text="Clear" func={clear} />
    </div>
  );
}
