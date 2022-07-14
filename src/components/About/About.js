import React from "react";
import "./About.css";
import Type from "./Type";

import Skillset from "./Skillset";

function About() {
  return (
    <>
      <div className="About_area">
        <div className="back_color">
          <div className="about_text">
            <Type /> <br />{" "}
            <div className="area">
              안녕하세요 <span className="about_name">이동훈</span>입니다 <br />
              <br />
              영진직업전문학교 국비교육 과정을 수료하면서 다양한 프로젝트를
              진행하였고, <br />
              이를 통해 웹 개발 업무 프로세스에 전반적인 이해력을 조금이나마
              습득하였습니다. <br />
              <br />
              개발에서 가장 중요한 부분은 "사용자의 관점에서 편리하게 사용할 수
              있는가" <br />
              라고 생각되어, 늘 사용자의 입장에서 고민하고 있습니다. <br />
              <br />
              현재는 거창한 업무성과보다 사용자의 작은 문제해결에 <br />
              끝까지 몰입할 수 있는 신입 개발자입니다. <br />
            </div>
            <Skillset />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
