import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header.js";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
