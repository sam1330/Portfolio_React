import React, { useState } from "react";

import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Presentation from "../utilities/Presentation";
import Header from "./header/Header";
import Technologies from "../Technologies/Technologies";


const AppLayout = () => {

  const [tab, setTab] = useState("home");


  const handleTabChange = (tab) => {
    if (tab === "home") {
      return <Presentation />;
    } else if (tab === "aboutMe") {
      return <AboutMe />;
    } else if (tab === "technologies") {
      return <Technologies />;
    } else if (tab === "projects") {
    }
  }

  return (
    <>
      <Header setTab={setTab} />
      {handleTabChange(tab)}
      <Banner />
    </>
  );
};

export default AppLayout;