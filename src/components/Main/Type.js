import React from "react";
import Typewriter from "typewriter-effect";
import "./Main.css";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web programmer",
          "Frontend developer",
          "Lee Dong Hun my intro Page",
        ],
        autoStart: true,
        delay: 60,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
