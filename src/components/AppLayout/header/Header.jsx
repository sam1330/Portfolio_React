import React from "react";
import { useTranslation } from "react-i18next";

import "./header.scss";

const Header = () => {

  const [t, i18n] = useTranslation();

  return (
    <nav className="header">
      <a href="#about-me" className="menu-item">
        {t("ABOUT_ME")}
      </a>
      <a href="#" className="menu-item">
        {t("TECHNOLOGIES")}
      </a>
      <a href="#" className="menu-item">
        {t("PROJECTS")}
      </a>
      <a href="#" className="menu-item">
        {t("CONTACT")}
      </a>
    </nav>
  );
};

export default Header;
