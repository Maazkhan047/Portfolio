import React from "react";
import "./Hero.css";
import profile_img from "../../assets/file2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myResume from '../../assets/maaz-resume.pdf'


const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img}  alt="" />
      <h1>
        <span>Hi I'm Maaz,</span> i'm Front-End Developer
      </h1>
      <p>
        I specialize in creating responsive and user-friendly websites. Let's
        turn your ideas into beautiful web experiences
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <a style={{color: 'white', textDecoration: 'none'}} href={myResume}> <div className="hero-resume">My resume</div></a>
      </div>
    </div>
  );
};

export default Hero;
