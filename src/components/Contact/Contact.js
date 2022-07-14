import React from "react";
import "./Contact.css";

function Contact() {
  const emaill_call = () => {
    window.location.href = "mailto:deruline@naver.com";
  };
  const tel_call = () => {
    window.location.href = "tel:010-5461-4389";
  };
  return (
    <>
      <div className="Contact_area">
        <div className="contact_title">Contact</div>
        <div className="contact_contents_title title_all" onClick={tel_call}>
          휴대폰 번호 및 연결 > <span className="t"> 010-5461-4389</span>
        </div>

        <div className="contact_contents_title title_all" onClick={emaill_call}>
          이메일 주소 및 전송 > <span className="t">deruline@naver.com</span>
        </div>
      </div>
    </>
  );
}
export default Contact;
