import React from "react";
import "./style.css";
import ArrowRightAltSharpIcon from "@material-ui/icons/ArrowRightAltSharp";

function Links() {
  return (
    <div className="links">
      <h2 className="footer-heading">Links</h2>
      <ul>
        <li>
          <a href="/">
            <ArrowRightAltSharpIcon />
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <ArrowRightAltSharpIcon />
            About
          </a>
        </li>
        <li>
          <a href="/">
            <ArrowRightAltSharpIcon />
            Sevices
          </a>
        </li>
        <li>
          <a href="/">
            <ArrowRightAltSharpIcon />
            Departments
          </a>
        </li>
        <li>
          <a href="/">
            <ArrowRightAltSharpIcon />
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
