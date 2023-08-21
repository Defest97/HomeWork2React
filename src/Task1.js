import "./styles.css";
import React, { useState } from "react";

const RndNum = ({ min, max }) => {
  const [num, setNum] = useState(0);
  const componentClick = () => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setNum(randomNum);
    console.log(randomNum);
  };
  return (
    <>
      <p onClick={componentClick}>{num}</p>
    </>
  );
};

export default function Task1() {
  return (
    <div className="App">
      <RndNum min={1} max={10} />
    </div>
  );
}
