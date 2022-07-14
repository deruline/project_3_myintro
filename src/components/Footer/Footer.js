import React from "react";
import "./Footer.css";

function Footer() {
  const emaill_call = () => {
    window.location.href = "mailto:deruline@naver.com";
  };
  const tel_call = () => {
    window.location.href = "tel:010-5461-4389";
  };
  return (
    <div className="footer_area">
      <div className="title">Contact</div>
      <div className="email" onClick={emaill_call}>
        <div className="email_icon">📬</div>
        <div className="email_info">deruline@naver.com</div>
      </div>

      <div className="tel" onClick={tel_call}>
        <div className="tel_icon">📳</div>
        <div className="tel_info">&nbsp;010 - 5461 - 4389</div>
      </div>
      <div className="copy">© 2022. Lee Dong Hun. All rights reserved.</div>
    </div>
  );
}

export default Footer;
