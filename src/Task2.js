import "./styles.css";
import React, { useState } from "react";

const PlusNum = ({ addNum, click }) => {
  const componentClick = () => {
    click(addNum);
  };
  return (
    <>
      <button onClick={componentClick}>{addNum}</button>
    </>
  );
};

export default function Task1() {
  const [count, setCount] = useState(0);
  const click = (addNum) => {
    setCount(count + addNum);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <PlusNum addNum={5} click={click} />
      <PlusNum addNum={10} click={click} />
      <PlusNum addNum={15} click={click} />
    </div>
  );
}
