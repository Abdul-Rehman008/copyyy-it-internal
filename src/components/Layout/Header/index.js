import React from "react";
import "./style.scss";
import { Button } from "react-bootstrap";
import { IconSettings, IconUserCircle } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="app-header pt-4 pb-5 mb-3 px-4 d-flex align-items-center justify-content-between flex-wrap">
      <h2 className="mb-0">Dashboard</h2>
      {/* Add user menu or actions */}
      <div className="btnWrap d-flex gap-3 align-items-center justify-content-end">
        <Button variant="success" className="bg-green px-5">
          START
        </Button>
        <IconSettings />
        <IconUserCircle />
      </div>
    </header>
  );
};

export default Header;
