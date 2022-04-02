import React from "react";
import { useTranslation } from "react-i18next";
import Modal from "../modal/Modal";

import "./LanguageBtn.scss"

const LanguageBtn = () => {
  const [t, i18n] = useTranslation();

  return (
    <>
      <span className="language__btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-language"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 5h7"></path>
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8"></path>
          <path d="M5 9c-.003 2.144 2.952 3.908 6.7 4"></path>
          <path d="M12 20l4 -9l4 9"></path>
          <path d="M19.1 18h-6.2"></path>
        </svg>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-world"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="12" r="9"></circle>
          <line x1="3.6" y1="9" x2="20.4" y2="9"></line>
          <line x1="3.6" y1="15" x2="20.4" y2="15"></line>
          <path d="M11.5 3a17 17 0 0 0 0 18"></path>
          <path d="M12.5 3a17 17 0 0 1 0 18"></path>
        </svg> */}
        {/* { t("LANGUAGE") } */}
      </span>
        <Modal />
    </>
  );
};

export default LanguageBtn;