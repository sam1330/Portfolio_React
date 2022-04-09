import React from "react";
import AboutMe from "../AboutMe/AboutMe";

import "./Banner.scss"
const Banner = () => {

  return (
    <div className="banner__image">
      {/* <div className="presentation">
        <h1 className="presentation__name">Samuel Martinez</h1>
        <h4 className="presentation__intro">FullStack Web Developer</h4>
      </div> */}
      <AboutMe />
      <div className="banner__overlay"></div>
    </div>
  );
};

export default Banner;