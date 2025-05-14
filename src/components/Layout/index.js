import React from "react";
import Header from "./Header";
import Sidebar from "../Layout/Sidebar";
import "./style.scss";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="body-content-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
