import React from "react";
import "./style.css";
import ContactInfo from "./ContactInfo";
import RecentBlog from "./RecentBlog";
import Links from "./Links";
import SubscribeUs from "./SubscribeUs";
import ConnectWithUs from "./ConnectWithUs";
import Copyrights from "./Copyrights";

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-container">
          <div className="first-column">
            <ContactInfo />
          </div>

          <div className="second-column">
            <RecentBlog />
          </div>

          <div className="third-column">
            <Links />
          </div>

          <div className="fourth-column">
            <SubscribeUs />
            <ConnectWithUs />
          </div>
        </div>
        <Copyrights />
      </div>
    </footer>
  );
}

export default Footer;
