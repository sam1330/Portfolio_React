import React from "react";
import Banner from "../Banner/Banner";
import Header from "./header/Header";

const AppLayout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
      <Banner />
    </>
  );
};

export default AppLayout;