import React from "react";
import "./Project.css";

import project_1 from "./img/project_1.png";
import project_2 from "./img/project_2.png";
import project_3 from "./img/project_3.png";
import git_logo from "./img/git_logo.png";
import url_logo from "./img/url_logo.png";

function PList() {
  return (
    <>
      <div className="al">
        <span className="imo_text">마우스를 올려주세요</span>
        <span className="imo">👇</span>
        <div className="List_area_1 List_area">
          <div className="tab front_1 front_all">
            <div className="good">
              영진전문대학교 인공지능혁신공유대학사업단 주관 <br />
              스마트웹앱 콘텐츠 개발 경진대회 장려상
            </div>
            <img src={project_1} alt=""></img>
            <div className="front_1_area">
              <div className="front_1_title">
                참좋은 휘트니스
                <br /> (SNS 알림톡 연동)
              </div>
              <div className="front_1_text_1 front_1_textall">
                적용 디바이스 : PC, Mobile
              </div>
              <div className="front_1_text_2 front_1_textall">
                사용 기술 : html, css, js
              </div>
            </div>
          </div>

          <div className="tab back_1 back_all">
            <div className="github">
              <div className="github_img logo_img">
                <img src={git_logo} alt=""></img>
              </div>
              <div className="github_link link_font">
                <a
                  target="_blank"
                  href="https://github.com/deruline/project_1_SNS"
                >
                  https://github.com/deruline/project_1_SNS
                </a>
              </div>
            </div>
            <div className="url">
              <div className="url_img logo_img">
                <img src={url_logo} alt=""></img>
              </div>
              <div className="url_link link_font">
                <a
                  target="_blank"
                  href="http://deruline.dothome.co.kr/project_sns/Main_Page/"
                >
                  http://deruline.dothome.co.kr/project_sns/Main_Page/
                </a>
                <a
                  target="_blank"
                  href="http://deruline.dothome.co.kr/project_sns/Detail_Page/"
                >
                  http://deruline.dothome.co.kr/project_sns/Detail_Page/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="List_area_2 List_area">
          <div className="tab front_2 front_all">
            <img src={project_2} alt=""></img>
            <div className="front_2_area">
              <div className="front_2_title">
                가보자GO
                <br />
                (지역 시장 활성화 방안)
                <br /> (GPS 기반 인증 웹앱)
              </div>

              <div className="front_2_text_2 front_2_textall">
                적용 디바이스 : Mobile
              </div>
              <div className="front_2_text_3 front_2_textall">
                사용 기술 : html, css, js
              </div>
            </div>
          </div>
          <div className="tab back_2 back_all">
            <div className="github">
              <div className="github_img logo_img">
                <img src={git_logo} alt=""></img>
              </div>
              <div className="github_link link_font">
                <a
                  target="_blank"
                  href="https://github.com/deruline/project_2_GPS"
                >
                  https://github.com/deruline/project_2_GPS
                </a>
              </div>
            </div>
            <div className="url url_2">
              <div className="url_img logo_img">
                <img src={url_logo} alt=""></img>
              </div>
              <div className="url_link link_font">
                <a
                  target="_blank"
                  href="http://deruline.dothome.co.kr/project_gps/"
                >
                  http://deruline.dothome.co.kr/project_gps/
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="List_area_3 List_area">
          <div className="tab front_3 front_all">
            <img src={project_3} alt=""></img>

            <div className="front_3_area">
              <div className="front_3_title">
                자기소개 홈페이지
                <br />
                (REACT 기반 구현)
              </div>
              <div className="front_3_text_1 front_3_textall">
                적용 디바이스 : PC, Mobile
              </div>
              <div className="front_3_text_2 front_3_textall">
                사용 기술 : React, html, css, js
              </div>
            </div>
          </div>
          <div className="tab back_3 back_all">
            <div className="github">
              <div className="github_img logo_img">
                <img src={git_logo} alt=""></img>
              </div>
              <div className="github_link link_font">
                <a
                  target="_blank"
                  href="https://github.com/deruline/project_3_myintro/"
                >
                  https://github.com/deruline/project_3_myintro
                </a>
              </div>
            </div>
            <div className="url url_2">
              <div className="url_img logo_img">
                <img src={url_logo} alt=""></img>
              </div>
              <div className="url_link link_font">
                <a
                  target="_blank"
                  href="https://deruline.github.io/project_3_myintro/"
                >
                  https://deruline.github.io/project_3_myintro/
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PList;
