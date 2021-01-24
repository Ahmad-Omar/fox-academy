import React, { useState } from "react";
import "./style.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import PhoneNumber from "./PhoneNumber";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const handleClick = (e) => {
    menuToggle === false ? setMenuToggle(true) : setMenuToggle(false);
    // console.log(menuToggle);
  };
  const menuStyle = {
    height: menuToggle === true ? "224px" : "0",
  };
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
          <div
            className="menu-icon"
            style={{ fontSize: "30", cursor: "pointer" }}
            onClick={handleClick}
          >
            {menuToggle ? (
              <CloseRoundedIcon style={{ fontSize: "30px" }} />
            ) : (
              <MenuRoundedIcon style={{ fontSize: "30px" }} />
            )}
          </div>
          <div
            className="nav-menu-mobile hidden-desktop"
            style={menuStyle}
            onClick={() => {
              setMenuToggle(false);
            }}
          >
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
