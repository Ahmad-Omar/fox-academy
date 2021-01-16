import React from "react";
import "./style.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import PhoneNumber from "./PhoneNumber";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function Navbar() {
  return (
    <>
      <nav className="navbar hidden-mobile">
        <div className="navbar-container">
          <Logo />
          <NavItems />
          <PhoneNumber />
        </div>
      </nav>
      <nav className="nav-mobile hidden-desktop">
        <div className="nav-mobile-wrapper">
          <Logo />
          <div className="menu-icon">
            <MenuRoundedIcon style={{ fontSize: "30", cursor: "pointer" }} />
          </div>
          <div className="nav-menu-mobile hidden-desktop">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
