import React from "react";
import { useTranslation } from "react-i18next";

import "./header.scss";

const Header = ({ setTab }) => {
  const [t, i18n] = useTranslation();

  return (
    <nav className="header">
      <span onClick={() => setTab(() => "home")} className="menu-item">
        {t("HOME")}
      </span>
      <span onClick={() => setTab(() => "aboutMe")} className="menu-item">
        {t("ABOUT_ME")}
      </span>
      <span onClick={() => setTab(() => "technologies")} className="menu-item">
        {t("TECHNOLOGIES")}
      </span>
      <span onClick={() => setTab(() => "projects")} className="menu-item">
        {t("PROJECTS")}
      </span>
      <span onClick={() => setTab(() => "contact")} className="menu-item">
        {t("CONTACT")}
      </span>
    </nav>
  );
};

export default Header;
