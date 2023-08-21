import "./styles.css";
import React, { useState } from "react";
import Task1 from "../src/Task1";
import Task2 from "../src/Task2";
import Task3 from "../src/Task3";

export default function App() {
  return (
    <div className="App">
      Task1
      <Task1 />
      Task2
      <Task2 />
      Task3
      <Task3 />
    </div>
  );
}
