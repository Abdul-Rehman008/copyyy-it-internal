// import React from "react";
// import {
//   IconHome,
//   IconFiles,
//   IconChartLine,
//   IconChartBar,
//   IconSettings,
// } from "@tabler/icons-react";
// import "./style.scss";
// import avatar from '../../../assets/img/avatar.svg';
// import { Link } from "react-router-dom";

// const navLinks = [
//   { label: "Dashboard", icon: IconHome, active: false },
//   { label: "Copy Trade", icon: IconFiles, active: true },
//   { label: "Trading", icon: IconChartLine, active: false },
//   { label: "Market Place", icon: IconChartBar, active: false },
//   { label: "Settings", icon: IconSettings, active: false },
// ];

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column align-items-center p-3 sidebar">
//       <div className="text-center">
//         <img src={avatar} alt="Profile" className="rounded-circle mb-2" />
//         <h6 className="userName text-center fw-bold">Long Community Name</h6>
//       </div>
//       <ul className="nav flex-column w-100">
//         {navLinks.map((link, index) => (
//           <li key={index} className="nav-item mb-2">
//             <Link
//               to="#"
//               className={`nav-link ${
//                 link.active ? "text-white copy-trade-link" : "text-dark"
//               }`}
//             >
//               <link.icon size={20} /> {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="mt-auto text-center text-muted small siderbar-footer">
//         <hr />
//         <div>
//           <p className="poweredBy fw-medium">POWERED BY</p>
//           <p className="companyName fw-bold">
//             <strong>copyyy.it</strong>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  IconHome,
  IconFiles,
  IconChartLine,
  IconChartBar,
  IconSettings,
  IconMenu,
} from "@tabler/icons-react";
import { Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import avatar from "../../../assets/img/avatar.svg";
import "./style.scss";

const navLinks = [
  { label: "Dashboard", icon: IconHome, path: "/dashboard" },
  { label: "Copy Trade", icon: IconFiles, path: "/copy-trade" },
  { label: "Trading", icon: IconChartLine, path: "/trading" },
  { label: "Market Place", icon: IconChartBar, path: "/market-place" },
  { label: "Settings", icon: IconSettings, path: "/settings" },
];

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow} className="d-lg-none m-2">
        ☰ Menu
      </Button> */}

      <div onClick={handleShow} className="d-lg-none m-2 text-end">
        <IconMenu />
      </div>

      {/* Offcanvas Sidebar for Mobile */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        className="mobSidebar"
        style={{ gap: 10 }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Logo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="text-center">
            <img src={avatar} alt="Profile" className="rounded-circle mb-2" />
            <h6 className="userName text-center fw-bold">
              Long Community Name
            </h6>
          </div>

          <ul className="nav flex-column w-100 mt-3 align-items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item mb-2">
                <Link
                  to={link.path}
                  className="nav-link text-dark d-flex align-items-center gap-2"
                  onClick={handleClose} // auto-close on link click
                >
                  <link.icon size={20} /> {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className="mt-auto text-center text-muted small siderbar-footer"
            style={{ maxWidth: "100%" }}
          >
            <hr />
            <p className="poweredBy fw-medium">POWERED BY</p>
            <p className="companyName fw-bold">
              <strong>copyyy.it</strong>
            </p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Static Sidebar for Desktop */}
      <div className="d-none d-lg-flex flex-column align-items-center p-3 sidebar vh-100">
        <div className="text-center">
          <img src={avatar} alt="Profile" className="rounded-circle mb-2" />
          <h6 className="userName text-center fw-bold">Long Community Name</h6>
        </div>
        <ul className="nav flex-column w-100 mt-3">
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item mb-2">
              <Link
                to={link.path}
                className="nav-link text-dark d-flex align-items-center gap-2"
              >
                <link.icon size={20} /> {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-auto text-center text-muted small siderbar-footer">
          <hr />
          <p className="poweredBy fw-medium">POWERED BY</p>
          <p className="companyName fw-bold">
            <strong>copyyy.it</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
