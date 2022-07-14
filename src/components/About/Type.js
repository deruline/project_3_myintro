import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span className="about_type">
      <Typewriter
        options={{
          strings: [`" 저를 소개합니다 "`],
          autoStart: true,

          loop: true,
        }}
      />
    </span>
  );
}

export default Type;
