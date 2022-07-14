import React from "react";

import html_img from "./img/html_icon.png";
import css_img from "./img/css_icon.png";
import jquery_img from "./img/jquey_icon.png";
import js_img from "./img/js_icon.png";
import node_img from "./img/nodejs_icon.png";
import react_img from "./img/react_icon.png";

function Skillset() {
  return (
    <>
      <div className="all">
        <div className="Skill_text_area">
          <div className="Skill_text">Skill</div>
        </div>
        <div className="Skill_area">
          <div className="skill_1 skill_all">
            <img src={html_img} alt=""></img>
          </div>
          <div className="skill_2 skill_all">
            <img src={css_img} alt=""></img>
          </div>
          <div className="skill_3 skill_all">
            <img src={js_img} alt=""></img>
          </div>
          <div className="skill_4 skill_all">
            <img src={jquery_img} alt=""></img>
          </div>
          <div className="skill_5 skill_all">
            <img src={node_img} alt=""></img>
          </div>
          <div className="skill_6 skill_all">
            <img src={react_img} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skillset;
