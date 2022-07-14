import React from "react";
import "./Main.css";

import Type from "./Type";
import my from "./img/my.jpg";
function Main() {
  return (
    <div className="Main_area">
      <div className="back_color">
        <div className="type_area">
          <span className="type_text">
            <span className="my_photo">
              <img src={my} alt=""></img>
            </span>

            <div className="hi_area">
              <div className="hi_text">안녕하세요</div>
              <div className="hi_imo">🖐</div>
            </div>
          </span>
          <Type />
        </div>
      </div>
    </div>
  );
}

export default Main;
