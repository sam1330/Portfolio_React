import React from "react";
import Header from "./header/Header";

const AppLayout = ({ children }) => {

  return (
    <>
      <Header />
        { children }
    </>
  );
};

export default AppLayout;