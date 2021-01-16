import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function NavItems() {
  return (
    <ul className="nav-menu">
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/staff">Staff</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavItems;
