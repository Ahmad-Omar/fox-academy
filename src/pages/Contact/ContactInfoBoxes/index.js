import React from "react";
import "./style.css";

function ContactInfoBoxes() {
  return (
    <section className="contact-boxes">
      <div className="wrapper">
        <div className="boxes">
          <div className="box">
            <h2 className="box-title">Address</h2>
            <p>198 West 21th Street, Suite 721 New York NY 10016</p>
          </div>

          <div className="box">
            <h2 className="box-title">Contact Number</h2>
            <a href="tel:+1235 2355 98">+ 1235 2355 98</a>
          </div>

          <div className="box">
            <h2 className="box-title">Email Address</h2>
            <a href="mailto:info@yoursite.com">info@yoursite.com</a>
          </div>

          <div className="box">
            <h2 className="box-title">Website</h2>
            <a href="/">yoursite.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoBoxes;
