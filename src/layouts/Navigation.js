import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const navList = [
  { name: "Hva tilbry vi", path: "#" },
  { name: "Bransjer", path: "#" },
  { name: "Nyheter", path: "#" },
  { name: "Om Norkart", path: "#" },
  { name: "e-Torg", path: "#" },
  { name: "Kundesenter", path: "#" },
  { name: "Søk", path: "#" }
];

const Header = () => {
  const menuList = navList.map((item, index) => (
    <li key={index}>
      <Link to={item.path}>{item.name}</Link>
    </li>
  ));
  return (
    <>
      <div className="navigation-row">
        <div className="branding">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation">
          <i className="fas fa-bars" />
        </div>
        <div className="main-navigation">
          <ul className="navigation-top-level">{menuList}</ul>
        </div>
      </div>
    </>
  );
};

export default Header;
