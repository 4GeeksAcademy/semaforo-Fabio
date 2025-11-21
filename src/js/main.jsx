import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("null");

  return (
    <div className="traffic-root">
      <div className="traffic-light-pole"></div>
      <div className="semaphore">
        <div
          className={`light red ${color === "red" ? "selected" : ""}`}
          onClick={() => setColor("red")}
        ></div>

        <div
          className={`light yellow ${color === "yellow" ? "selected" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>

        <div
          className={`light green ${color === "green" ? "selected" : ""}`}
          onClick={() => setColor("green")}
        ></div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);
