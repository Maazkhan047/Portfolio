import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/myProfile.png";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Maaz, a passionate Front-End Web Developer with a keen eye for
              design and functionality. I specialize in building responsive,
              user-friendly websites using HTML, CSS, JavaScript, and React.js.
              My focus is on creating visually appealing and high-performance
              web experiences that enhance user interaction.
            </p>
            <p>
              Alongside front-end development, I am currently learning backend
              technologies to become a full-stack developer. I am exploring
              Node.js, Express.js, and MongoDB to build robust and scalable web
              applications. My goal is to create seamless and efficient
              solutions by integrating both front-end and back-end technologies.
            </p>
          </div>
          <div className="about-skills">
          <h1>skills</h1>
            <div className="about-skill">
              <p>HTML </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JAVASCRIPT</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>REACT JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>9+</h1>
                <p>PROJECT COMPLETE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div> */}
    </div>
  );
};

export default About;
