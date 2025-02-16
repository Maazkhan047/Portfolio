import React from "react";
import "./Mywork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
// import mywork_data from "../../assets/mywork_data";
// import arrow_icon from "../../assets/arrow_icon.svg";
import project_1 from "../../assets/project_1.png";
import project_2 from "../../assets/project_2.png";
import project_3 from "../../assets/project_3.png";
import project_4 from "../../assets/project_4.png";
import project_5 from "../../assets/project_5.png";
import project_6 from "../../assets/project_6.png";
import project_7 from "../../assets/project_7.png";
import project_8 from "../../assets/project_8.png";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        <a
          href="https://net-flix-clone-tan.vercel.app/"
        >
          <img src={project_7} alt="Netflix_clone" />
        </a>
        <a href="https://edusity-pi-woad.vercel.app/">
          <img src={project_1} alt="Edusity" />
        </a>
        <a href="">
          <img src={project_8} alt="" />
        </a>
        <a href="">
          <img src={project_2} alt="" />
        </a>
        <a href="">
          <img src={project_3} alt="" />
        </a>
        <a href="">
          <img src={project_4} alt="" />
        </a>
        <a href="">
          <img src={project_5} alt="" />
        </a>
        <a href="">
          <img src={project_6} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Mywork;
