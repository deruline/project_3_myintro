import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const navigate = useNavigate();

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const GetClick = (e) => {
    setCurrentClick(e.target.classList[1]);
    console.log(e.target.classList[1]);
    if (e.target.classList[1] === "menu1") navigate("/home");
    if (e.target.classList[1] === "menu2") navigate("/about");
    if (e.target.classList[1] === "menu3") navigate("/project");
  };

  useEffect(() => {
    if (currentClick !== null) {
      let current = document.getElementsByClassName(currentClick);
      console.log(current[0]);
      current[0].style.color = "rgb(67, 26, 253)";
      current[0].style.borderBottom = "4px solid";
      current[0].style.borderBottomColor = "#1c28f4";
    }

    if (prevClick !== null) {
      let prev = document.getElementsByClassName(prevClick);
      prev[0].style.color = "";
      prev[0].style.borderBottom = "";
      prev[0].style.borderBottomColor = "";
    }
    setPrevClick(currentClick);
  }, [currentClick]);

  return (
    <header
      className={scrollPosition <= 100 ? "original_header" : "change_header"}
    >
      <div className="header_content">
        <div className="header_title">LDH's Portfolio</div>
        <div className="header_nav_area">
          <div className="header_nav_menu menu1" onClick={GetClick}>
            HOME
          </div>
          <div className="header_nav_menu menu2" onClick={GetClick}>
            ABOUT
          </div>
          <div className="header_nav_menu menu3" onClick={GetClick}>
            PROJECT
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
